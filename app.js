"use strict";

// ========== DOM REFERENCE ==========
const movieListContainer = document.querySelector("#movie-list");

// ========== DISPLAY SINGLE MOVIE ==========
function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");
  const movieHTML = `
    <article class="movie-card">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
}

// ========== DISPLAY ALL MOVIES ==========
function displayMovies(movieArray) {
  movieListContainer.innerHTML = "";
  for (const movie of movieArray) {
    displayMovie(movie);
  }
  console.log(`🎉 ${movieArray.length} movies vist!`);
}

// ========== LOAD MOVIES FROM JSON ==========
async function loadMovies() {
  console.log("🌐 Henter movies fra JSON...");
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();
  displayMovies(moviesFromJSON);
}

// ===== APP INITIALISERING =====
document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  loadMovies();
}

/* "når noget er med "" så er det tekst" */
/* hvis det ikke har "" så kan det være tal */
/* const, man kan ikke give den en ny værdi. Men det er muligt at gøre med en let */
/* variabler kan bruges til at gemme objekter, arrays, tal og tekst */
