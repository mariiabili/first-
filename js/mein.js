const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', (''));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных видео?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных видео?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;