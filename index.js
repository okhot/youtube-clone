const API_Key = 'api_key=77acd801b597c4084ac360528aebf8aa';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_Key;
API_IMG="https://image.tmdb.org/t/p/w500/"

const main = document.getElementsByClassName('videos__container')[0];

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(({results}) => showMovies(results));
}


function showMovies(data) {

    main.innerHTML= '';


   data.forEach(movie => {
     const {title, poster_path, release_date, popularity} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('video');
    movieEl.innerHTML = `
     
            <img class="video__thumbnail" src="${API_IMG+poster_path}" alt="${title}">
    

          <div class="video__details">
            <img src="${API_IMG+poster_path}" alt="">
            <div class="video__info">
              <h3>${title}</h3> 
              <p>${title}</p>
              <div class="video__stats">
         
              <span>${kFormatter(popularity)} Views</span> &middot;
              <span>${formatTimeAgo(new Date(release_date))}</span>
              </div>
            </div>
          </div>
        </div>
    `

    main.appendChild(movieEl);
   });
}