import containerTmp from '../templates/example.hbs';
import refs from './refs'; // refs.dataCont // refs.paginationCont
import pagination from 'paginationjs/dist/pagination.js';
const API_KEY = 'qE8iBnVwihSK4QSH4hL5UNRfjujJpVDl';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';




// function paginateRandomEvents() {

//   const paginationSettings = {
//     dataSource: `${BASE_URL}events.json?size=20&page=0&apikey=${API_KEY}`,
//     locator: '_embedded.events',
//     pageSize: 5,
//     showPrevious: false,
//     showNext: false,
//     callback: function (data, pagination) {
//       // var html = template(data);
//       // var html = containerTmp(data);
//       // refs.dataCont(html);
//     },
//   };
//   $('#pagination-container').pagination(paginationSettings);
// };
// paginateRandomEvents();


// export default function paginateRandomEvents(data, response) {
//   console.log(data);
//   console.log(data.totalElements);
//   console.log(data.totalPages);
//   console.log(response);
//   const markup = containerTmp(response);
//   console.log(markup);
//   refs.dataCont.insertAdjacentHTML('beforeend', markup);
// };

$(function () {
  (function (name) {
    var container = $('#pagination-' + name);
    container.pagination({
      dataSource:
        'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
      locator: 'items',
      totalNumber: 50,
      pageSize: 2,
      showPageNumbers: true,
      showPrevious: false,
      showNext: false,
      showNavigator: false,
      showFirstOnEllipsisShow: true,
      showLastOnEllipsisShow: true,
      ajax: {
        beforeSend: function () {
          container.prev().html('Loading data from flickr.com ...');
        },
      },
      callback: function (response, pagination) {
        window.console && console.log(22, response, pagination);
        var dataHtml = '<ul>';

        $.each(response, function (index, item) {
          dataHtml += '<li>' + item.title + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      },
    });
  })('demo2');
});