"use strict";

const numberOfFilms = prompt('Сколько фильмов вы просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prevat: false
};

const k = prompt ('Ласт фильм?', ''),
      e = prompt ('Оценка', ''),
      g = prompt ('Ласт фильм?', ''),
      v = prompt ('Оценка', '');

personalMovieDB.movies[k] = e;
personalMovieDB.movies[g] = v;


console.log(personalMovieDB);