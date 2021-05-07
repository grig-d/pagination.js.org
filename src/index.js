import './styles.css';
import containerTmp from './templates/example.hbs';

const refs = {
  dataCont: document.querySelector('#data-container'),
  paginationCont: document.querySelector('#pagination-container'),
};

console.log(containerTmp);
console.log(refs.dataCont);
console.log(refs.paginationCont);

// API: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

// $('#pagination-container').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         $('#data-container').html(html);
//     }
// })

// Below is a minimal rendering method:
function simpleTemplating(data) {
  var html = '<ul>';
  $.each(data, function (index, item) {
    html += '<li>' + item + '</li>';
  });
  html += '</ul>';
  return html;
}

// // Call:
// $('#pagination-container').pagination({
//   dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//   callback: function (data, pagination) {
//     var html = simpleTemplating(data);
//     $('#data-container').html(html);
//   },
// });
