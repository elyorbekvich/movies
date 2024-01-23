let partMovies = movies.slice(0, 50);
let elMovList = document.querySelector(".movies__list");
fnRender(partMovies)
function fnRender(data) {
  elMovList.innerHTML = ''
  data.forEach((item, index) => {
    let newLi = document.createElement("li")
    newLi.classList = 'movies__item'
    newLi.innerHTML = `
    <div class="movies__card">
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class=""><img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" alt="" /></a>
    <div class="card__info">
      <h4>${item.Title.toString().split("").slice(0,15).join("")}</h4>
      <div class="card__inner fs-4">
      <p class="text-secondary">${item.movie_year}</p>
      <p class="text-warning fw-bold opacity-75">${item.imdb_rating}</p>
      </div>
      <p class="fs-5">${item.Categories.toString().split("").slice(0,20).join("")}</p>
      <div class="d-flex align-items-center justify-content-between">
      
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        more
      </button>
      
      <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content border border-1 border-warning">
                <div class="modal-header border-0">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">${item.Title}</h1>
                  <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <!-- <iframe class="iframe" src="https://www.youtube.com/embed/${item.ytid.toString().split("").slice(0,20).join("")}"></iframe> -->
                
                <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class=""><img class="w-100" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" alt="" /></a>
                  <div class="df mt-3 fs-4"> 
                    <p class="text-secondary">${item.movie_year}</p>
                    <p class="text-warning ms-3 fw-bold opacity-75">${item.imdb_rating}</p>
                    </div>
                  <p>${'Categories: ' + item.Categories}</p>
                  <p>${'Language: ' + item.language}</p>
                  <p>${item.summary}</p>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-warning" data-bs-dismiss="modal">OK</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    `
    elMovList.appendChild(newLi);
  });
}


function fnYear(value) {
  if(value =='old'){
    fnRender(partMovies.sort((a,b)=> a.movie_year - b.movie_year));
  }else{
    fnRender(partMovies.sort((a,b)=> b.movie_year - a.movie_year));
  }
}
function fnRaiting(value) {
  if(value =='min'){
    fnRender(partMovies.sort((a,b)=> a.imdb_rating - b.imdb_rating));
  }else{
    fnRender(partMovies.sort((a,b)=> b.imdb_rating - a.imdb_rating));
  }
}