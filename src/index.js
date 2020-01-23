/**
 * es6 modules and imports
 */
const $ = require("jquery");
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, description, genre, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating} - ${description} - ${genre}`);
    $('#products').append('<tr><td>' +`id#${id}` + '</td><td>' + ' ' + `${title}` + '</td><td>' + `${rating}` + '</td><td>' + `${description}` + '</td><td>' + `${genre}` + '</td></tr>')
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

function refresh() {
  let inventory = $.get("./db.json");
  inventory.done(function (data) {
    $.each(data, function (index, item) {
      $('#insertProducts').append('<tr>' + '<td>' + item.title + '</td>' + '<td>' + item.rating + '</td>' + '<td>' + item.description + '</td>' + '<td>' + item.genre + '</td>' + '</tr>');
    })
  })
}
refresh();
$('#refresh').click(function () {
  $('#insertProducts').html("");
  refresh()
})
//functionality for the loading pane//

$(document).ready(function () {
  let loader1 = $('.container').hide().show(8000).hide(8000);
  let loader2 = $('.center').hide().show(8000).hide(8000);
});
