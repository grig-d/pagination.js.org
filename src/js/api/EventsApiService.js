const API_KEY = 'qE8iBnVwihSK4QSH4hL5UNRfjujJpVDl';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

export default class EventsApiService {
  constructor() {
    this.searchQuery = '';
    this._page = 0;
    this.totalElements = 0;
    this.totalPages = 0;
  }

  // Приносит что угодно по url
  goFetch(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then(({ page, _embedded }) => {
        this.totalElements = page.totalElements;
        this.totalPages = page.totalPages;

        return _embedded.events;
      });
  }

  // События при загрузке страницы
  fetchRandomEvents() {
    return this.goFetch(
      `${BASE_URL}events.json?size=20&page=${this._page}&apikey=${API_KEY}`,
    );
  }

  // События из строки поиска (поиск по названию)
  fetchEventsByKeyWord() {
    return this.goFetch(
      `${BASE_URL}events.json?keyword=${this.searchQuery}&source=universe&page=${this._page}&apikey=${API_KEY}`,
    );
  }

  // Получить событие по id
  fetchEventById(id) {
    return this.goFetch(
      `${BASE_URL}events.json?id=${id}&source=universe&apikey=${API_KEY}`,
    );
  }

  // Получить событие по стране
  fetchEventsByCoutry(countryCode) {
    return this.goFetch(
      `${BASE_URL}events.json?countryCode=${countryCode}&page=${this._page}&apikey=${API_KEY}`,
    );
  }

  // Получить картинки события по id
  fetchEventImage(id) {
    return fetch(`${BASE_URL}events/${id}/images.json?apikey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then(response => response.images);
  }

  // Переключение страниц (для пагинации)
  incrementPage() {
    this._page += 1;
  }

  decrementPage() {
    if (this._page <= 0) {
      return;
    }

    this._page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  // Информация о текущей странице
  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }

  // Результаты поискового запроса
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
