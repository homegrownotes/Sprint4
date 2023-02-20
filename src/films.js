// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter((movie) => movie.director === director);
  console.log(`EXERCICE 2 ->`, result);
  return result;
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const filteredMovies = movies.filter((movie) => movie.director === director);
  const sum = filteredMovies.reduce((total, movie) => total + movie.score, 0);
  const average = sum / filteredMovies.length;
  console.log(`EXERCICE 3 ->`, average);
  return average;
}
// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const sortedMovies = movies
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  const top20Movies = sortedMovies.slice(0, 20);
  const movieTitles = top20Movies.map((movie) => movie.title);
  console.log(`EXERCICE 4 ->`, movieTitles);
  return movieTitles;
}
// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMovies = movies.slice().sort((movie1, movie2) => {
    if (movie1.year !== movie2.year) {
      return movie1.year - movie2.year;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  console.log(`EXERCICE 5 ->`, sortedMovies);
  return sortedMovies;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filteredMovies = movies.filter((movie) =>
    movie.genre.includes(category)
  );

  const scoredMovies = filteredMovies.filter(
    (movie) => movie.score !== undefined
  );

  const totalScore = scoredMovies.reduce((acc, movie) => acc + movie.score, 0);
  const totalMovies = filteredMovies.length;
  const noScoreMovies = totalMovies - scoredMovies.length;
  console.log(`EXERCICE 6 ->`, totalMovies);
  return totalMovies > 0 ? (totalScore + noScoreMovies * 0) / totalMovies : 0;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  // Creamos un nuevo array para guardar las películas con la duración en minutos
  const moviesWithDurationInMinutes = [];

  // Iteramos sobre el array original de películas
  for (let i = 0; i < movies.length; i++) {
    // Extraemos la duración de la película y la convertimos en minutos
    const duration = movies[i].duration;
    const hoursToMinutes = duration.includes('h')
      ? parseInt(duration.split('h')[0]) * 60
      : 0;
    const minutes = duration.includes('min')
      ? parseInt(duration.split(' ')[1])
      : 0;
    const durationInMinutes = hoursToMinutes + minutes;

    // Creamos un objeto nuevo con la duración en minutos y lo agregamos al nuevo array
    const movieWithDurationInMinutes = {
      title: movies[i].title,
      year: movies[i].year,
      director: movies[i].director,
      duration: durationInMinutes,
      genre: movies[i].genre,
      score: movies[i].score
    };
    moviesWithDurationInMinutes.push(movieWithDurationInMinutes);
  }
  // Devolvemos el nuevo array con las películas con la duración en minutos
  console.log(`EXERCICE 7 ->`, moviesWithDurationInMinutes);
  return moviesWithDurationInMinutes;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesByYear = movies.filter((movie) => movie.year === year);
  if (moviesByYear.length === 0) {
    return null;
  }
  const bestMovie = moviesByYear.reduce((prev, current) => {
    return prev.score > current.score ? prev : current;
  });
  console.log(`EXERCICE 8 ->`, [bestMovie]);
  return [bestMovie];
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

