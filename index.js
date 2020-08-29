$(document).ready(function () {
  function renderMovies(movieArray) {
    console.log(movieArray);
    movieArray.map((movieItem) => {
      console.log($(".movies-container"));
      $(".movies-container").append(
        `<div class="movie">
                    <div class="card" style="width:  18rem;">
                        <img class="card-img-top" src="${movieItem.Poster}" alt="Card image cap"></img>
                        <div class="card-body">
                                <h5 class="card-title">${movieItem.Title}></h5>
                                <p class="card-text">${movieItem.Year}></p>
                                 <a href="#" onclick="saveToWatchlist('${movieItem.imdbID}')" class="btn btn-primary">Add Movie</a>
                        </div>
                     </div>
                 </div>`
      );
    });
  }
  $("#search-form").click(function (e) {
    console.log("clicked on search button");
    $(".movies-container").empty();
    e.preventDefault();
    renderMovies(movieData);
    console.log("done with render movies");
  });
});

function saveToWatchlist(imdbID) {
  console.log(imdbID);
  var movie = movieData.find((currentMovie) => {
    return currentMovie.imdbID == imdbID;
  });
  var watchlistJSON = localStorage.getItem("watchlist");
  var watchlist = JSON.parse(watchlistJSON);
  if (watchlist === null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}
