/**
 * es6 modules and imports
 */


const $ = require("jquery");

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

//functionality for the loading pane//
$(document).ready(function () {
  $("#extraControls").hide(8000).show();
  $('#products').hide().show();
  $('#refresh').hide().show();
});

let loader1 = $('.container').hide().show(3000).hide(3000);
let loader2 = $('.center').hide().show(3000).hide(3000);

const {getMovies, createMovie, deleteMovie} = require('./api.js');
getMovies().then((movies) => {
  console.log('Here are all the movies:');
  // $('#products').hide().show();

  movies.forEach(({title, rating, description, genre, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating} - ${description} - ${genre}`);
    $('#products').append('<tr><td>' +`id#${id}` + '</td><td>' + ' ' + `${title}` + '</td><td>' + `${rating}` + '</td><td>' + `${description}` + '</td><td>' + `${genre}` + '</td></tr>')
  });

}).catch((error) => {
  alert('Oh no! Something went wrong.Check the console for details.');
  console.log(error);

});

//add movie functioning//

    $('#refresh').click(function () {
      let movieTitle = $('#movie-title').val();
      console.log(movieTitle);
      let rating = $('#movie-rating').val();
      console.log(rating);
      let movieDescription = $('#movie-description').val();
      console.log(movieDescription);
      let select = $('#select').val();
      console.log(select);
      createMovie(movieTitle,rating,movieDescription,select);
    });

//delete movie//

  $('#delete').click(function () {
    let deletion = $('#delete1').val();
    console.log(deletion);
    deleteMovie(deletion);
  });







