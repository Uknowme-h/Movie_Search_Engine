
async function getmovie(){
    
    var name = document.querySelector(".input").value || "the avengers"
    var res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=9296fabe`)
    var data = await res.json()
        console.log(data);
        
     
if(data.Title === undefined){
    document.querySelector(".poster").src = `404.png`
    
}
    document.querySelector(".poster").src = `${data.Poster}`
    document.querySelector(".tlt").innerHTML = `<h1>${data.Title}</h1>`
    document.querySelector(".year").innerHTML = `${data.Year}`
    document.querySelector(".duration").innerHTML = `${data.Runtime}`
    document.querySelector(".plot").innerHTML = `${data.Plot}`
    document.querySelector(".tt").innerHTML = `${data.Type}`
    document.querySelector(".cu").innerHTML = `${data.Country}`
    document.querySelector(".ge").innerHTML = `${data.Genre}`
    document.querySelector(".ac").innerHTML = `${data.Actors}`
    document.querySelector(".re").innerHTML = `${data.Released}`
    document.querySelector(".dd").innerHTML = `${data.Director}`
    document.querySelector(".rated").innerHTML = `${data.Rated}`
    document.querySelector(".rate").innerHTML = `${data.imdbRating}`
    document.querySelector(".lang").innerHTML = `${data.Language}`
}
document.querySelector(".input").addEventListener("keyup",(Event)=>{
    if(Event.key === "Enter"){
        getmovie()
    }
})
getmovie()