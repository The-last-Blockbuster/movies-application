module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  createMovie: (title,rating,description,genre ) => {
    const MoviePost = {title: title, rating:rating, description:description,genre:genre };
    const url = '/api/movies';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(MoviePost),
    };
    return fetch('/api/movies', options)
        .then(response => response.json())
        .catch(error);
    // console.log(error);
  },

  deleteMovie: (id) => {
    const deleteMovie = {id:id };
    const url = '/api/movies/'+id;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteMovie),
    };
    return fetch(url, options)
        .then(response => response.json())
        // .catch(error);
    // console.log(error);
  },
};

//
// };createMovie: (title,rating,description,genre ) =>{
//     const MoviePost = {title: title, rating:rating, description:description,genre:genre };
//     const url = '/api/movies';
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(MoviePost),
//     };
//     return fetch('/api/movies', options)
//         .then(response => response.json())
//         .catch(error);
//     console.log(error);
//   }
//
// };createMovie: (title,rating,description,genre ) =>{
//     const MoviePost = {title: title, rating:rating, description:description,genre:genre };
//     const url = '/api/movies';
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(MoviePost),
//     };
//     return fetch('/api/movies', options)
//         .then(response => response.json())
//         .catch(error);
//     console.log(error);
//   }
//
// };
