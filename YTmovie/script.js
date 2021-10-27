// here in this mini project I used youtube Api link, but As I submitted this project into public Github repository so that I can't provide My Api key if U want to check My project to feel free and ask me for my Api Key 







// sideBar

let menuIcon = document.querySelector('.hamburger') ; //add class hamburger class name
let sidebar = document.querySelector('.sidebar') ;  //add class sidebar class name

menuIcon.onclick = function(){
    sidebar.classList.toggle("smallSidebar");   // toggle the class
}

// signin signup popup
let clicked = false;
let spop = document.querySelector('.userIcon');
let sidebarpop = document.getElementById('pop-main')


spop.onclick = function(){
    if(clicked === false){
        sidebarpop.style.display = "block";
        clicked = true;
    }else {
        sidebarpop.style.display = "none";
        clicked = false;
    }
  
}




//  main container

let parent = document.getElementById('main_div')

  async function showVideos(){

    try{
        let res = await fetch('https://youtube.googleapis.com/youtube/v3/search?type=video&key=AIzaSyDdzweW9-us5ypGorA2oGp-0y8j7bPPuIs&maxResults=20&safeSearch=strict&videoCaption=closedCaption&part=snippet&chart=mostPopular&regionCode=IN')

        console.log(res);
        let data = await res.json();

        console.log(data.items);
        appendVideos(data.items);

    }catch(e){
        console.log("Got an error" , e)
    }

  
  }
  showVideos();
   
    function  appendVideos(video_data){
        parent.innerHTML = null;

        video_data.forEach( ({ 
            id:{ videoId },
            snippet:{ title ,channelTitle },
            })=>{
            //console.log(videoId);

            let div = document.createElement("div");
            div.setAttribute('class','vdoApi_div')

            let inner_div = document.createElement("div");
            inner_div.innerText =`<iframe width="50px" height="100px" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            let titleWrapper = document.createElement("div");
            titleWrapper.setAttribute("class", "titleWrapper");


            let div_title = document.createElement("div");
            div_title.setAttribute('class','vdoApi_title')


            
            let title1 = document.createElement('p');
            title1.innerText =title;
            
          

            let channelTitle_div = document.createElement('p')
            channelTitle_div.setAttribute("class", "channel_titleDiv");

            let channelTitle1 = document.createElement('p')
            channelTitle1.innerText = channelTitle;

            let img = document.createElement('img');
            img.src = "https://img.icons8.com/ios-glyphs/20/000000/checked--v1.png"

            div_title.append(title1);
            console.log(title ,channelTitle)

            channelTitle_div.append(channelTitle1,img);

            titleWrapper.append(div_title, channel_titleDiv);

            div.append(inner_div,titleWrapper);

            parent.append(div)
            
        });

    }


   
let videos = document.getElementById('main_div')

    async function searchVideos(){

        let query = document.getElementById('query').value
        try{
            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key={}&maxResults=20`)

            let data = await res.json();

            console.log(data);
            appendVideos(data.items)
        }catch{
            console.log(e)
        }
    }


    function  appendVideos(video_data){
        videos.innerHTML = null;

        video_data.forEach( ({ id:{videoId} })=>{
            //console.log(videoId);

           let div = document.createElement("div");
            // embeded video 
            div.innerHTML = `<iframe width="300" height="215" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            div.style.marginTop = "20px";
            
            videos.append(div);
            // videos.style.display = "block";
            // parent.style.display = "none"
            
        });

        // 
    }

