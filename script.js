const BASE_URL = 'http://localhost:3000';
function getMovies(){
  return fetch(`${BASE_URL}/movies`)
    .then(response=>response.json())
}
function getMoviesById(movieId){
    return fetch(`${BASE_URL}/movies/${movieId}`)
     .then(response=>response.json())
  }

  