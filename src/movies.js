// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple
// times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

let onlyDirectors = movies.map(function(item){
   return item.director;
           
});

let onlyDirectorsFinal = onlyDirectors.filter(function(elem, index, self) {
  return index === self.indexOf(elem);
});

return onlyDirectorsFinal;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let qtd = movies.reduce((total, valor) => {
    if (valor.director == 'Steven Spielberg' && valor.genre.includes('Drama')) {
      total ++;
    }
    return total;
  }, 0);
  
  return qtd; 
    
  }



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies == ''){
    return 0;
  }

  let result = movies.reduce((prevVal, elem) => prevVal + elem.score, 0 ); 
    return result / movies.length;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.reduce((total, item) => {
     if (item.genre.icludes('Drama')) {
     total + item.score;
     }
      return total;
     }, 0);
 
     return console.log(dramaMovies / movies.length);
 }





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let orderedMovies = movies.map(function(item) {
    return {
      title: item.title
    }
  });
         
  return orderedMovies;
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
