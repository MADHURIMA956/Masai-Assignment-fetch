// slide show

setInterval(function(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[1].classList.add("active")             //active 2nd div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[2].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }
},3000);

function next(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[1].classList.add("active")             //active 2nd div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[2].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }
}

function prev(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[2].classList.add("active")             //active last div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[1].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }
}






// search movie

let parent = document.getElementById("data");

async function getMovieDetails(){
   
     let movie = document.getElementById("movie").value ;
     document.getElementById("movie").value ='';
     try{
   
        let res = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey={}`);
   
        let data = await res.json();

        console.log(data) ;
        showMovieDetails(data);
     }catch(e){
         let message = `${movie} is not found`;
        alert(message);
     }
  

}


function showMovieDetails(moviedetail){
    parent.innerText = null;

    let div1 = document.createElement("div");

    let img = document.createElement("img");
    img.src = moviedetail.Poster

    let Title = document.createElement("h2");
    Title.innerText =  moviedetail.Title;
 
    let rating = document.createElement("p");
    rating.innerText =  "Movie rating :"+ " " +  moviedetail.imdbRating;

    let country = document.createElement("p");
    country.innerText = "Origin Of The Movie:"+ " " +  moviedetail.Country;

    let director = document.createElement("p");
    director.innerText = "Movie director :"+ " " + moviedetail.Director;

    
    let released = document.createElement("p");
    released.innerText = "Movie Released Date :"+ " " + moviedetail.Released;

    let writer = document.createElement("p");
    writer.innerText = " Movie writer :"+ " " + moviedetail.Writer;

    div1.append(img,Title, rating,released,country,director,writer)
    parent.append(div1);

    let minDiv = document.getElementById('maindiv');
    minDiv.style.display = "none";

    let minDiv1 = document.getElementById('movie_Data');
    minDiv1.style.display = "none";
}




let movie_Id = document.getElementById("movie_Data");

async function getMovieData(){

    try{
        let res = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey={}`);

        let data = await res.json();
        console.log(data)
        showWholeMovie_data(data)
    }catch(e){
        console.log(e);
    }
}

function showWholeMovie_data(movie){

    movie.innerText = null;
    movie.forEach((m)=>{

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = m.logo_path;

        let name = document.createElement('p');
        name.src = m.name;

        let country = document.createElement('p');
        country.src = m.origin_country;

        div.append(img,name,country);
        movie_Id.append(div)

    })
    
}

getMovieData()

