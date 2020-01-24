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
  $("#extraControls").hide().animate({height: "300px"}).show(12000);
  // $('#products').stop().animate({height: "300px"}).show();
  $('#refresh').hide().show();
});

let loader1 = $('.loader').show(4000).show(2000).hide(4000);
let loader2 = $('.loader2').show(4000).show(2000).hide(4000);



const {getMovies, createMovie, deleteMovie, editMovie} = require('./api.js');
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
      location.reload();
      let movieTitle = $('#movie-title').val();
      console.log(movieTitle);
      let rating = $('.rating').val();
      console.log(rating);
      let movieDescription = $('#movie-description').val();
      console.log(movieDescription);
      let select = $('#select').val();
      console.log(select);
      createMovie(movieTitle,rating,movieDescription,select);
    });

//delete movie//

  $('#delete').click(function () {
    location.reload();
    let deletion = $('#id-number').click();
    console.log(deletion);
    deleteMovie(deletion);
  });

//edit movie//



  $('#edit').click(function () {
    location.reload();
  let edit2 = $('#id-number').val();
  console.log(edit2);
    let rating = $('.rating').val();
    console.log(rating);
    editMovie(edit2,rating);
});





