'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a1 = prompt("Один из последних просмотренных фильмов?", ""),
                  a2 = prompt("На сколько оцените его?", "");
    
            if (a1 != '' && a1.length < 50 && a2 != '' && a1 != null && a2 != null) {  
                personalMovieDB.movies[a1] = a2;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if ((personalMovieDB.count < 30) && (personalMovieDB.count >= 10)) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        let q;
        for (let i = 0; i < 3; i++)
        {
            q = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (q == null || q == ''){
                i--;
            } else {
                personalMovieDB.genres[i] = q;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
        });
    },  
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();