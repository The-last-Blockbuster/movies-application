module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  createMovie: (title,rating,description,genre ) =>{
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
    console.log(error);
  }

};
