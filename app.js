async function getmovie() {
    var name = document.querySelector(".input").value || "the avengers";
    var res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=9296fabe`);
    var data = await res.json();
    console.log(data);

    if (data.Title === undefined) {
        document.querySelector(".poster").src = `404.png`;
    }

    document.querySelector(".poster").src = `${data.Poster}`;
    document.querySelector(".tlt").innerHTML = `<h1>${data.Title}</h1>`;
    document.querySelector(".year").innerHTML = `${data.Year}`;
    document.querySelector(".duration").innerHTML = `${data.Runtime}`;
    document.querySelector(".plot").innerHTML = `${data.Plot}`;
    document.querySelector(".tt").innerHTML = `${data.Type}`;
    document.querySelector(".cu").innerHTML = `${data.Country}`;
    document.querySelector(".ge").innerHTML = `${data.Genre}`;
    document.querySelector(".ac").innerHTML = `${data.Actors}`;
    document.querySelector(".re").innerHTML = `${data.Released}`;
    document.querySelector(".dd").innerHTML = `${data.Director}`;
    document.querySelector(".rated").innerHTML = `${data.Rated}`;
    document.querySelector(".rate").innerHTML = `${data.imdbRating}`;
    document.querySelector(".lang").innerHTML = `${data.Language}`;

    var trailer = await gettrailer(data.imdbID);
    console.log(trailer);
    document.querySelector(".trailer iframe").src = `https://www.youtube.com/embed/${trailer}`;
    
}

document.querySelector(".input").addEventListener("keyup", (Event) => {
    if (Event.key === "Enter") {
        getmovie();
    }
});

async function gettrailer(imdbid) {
    const url = 'https://movies-tv-shows-database.p.rapidapi.com/?movieid='+imdbid;
    const options = {
        method: 'GET',
        headers: {
            Type: 'get-movie-details',
            'X-RapidAPI-Key': '135f8773f5msh96270997367b551p18e817jsnc8e4627bbe10',
            'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.youtube_trailer_key;
    } catch (error) {
        console.error(error);
    }
}

function playtrailer() {
    document.querySelector(".movie-info").style.display = "none";
    document.querySelector(".trailer").style.display = "block";
    
}

function closeTrailer() {
    document.querySelector(".movie-info").style.display = "block";
    document.querySelector(".trailer").style.display = "none";
    
   
}
getmovie();