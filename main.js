  // fetch('https://api.imgur.com/3/gallery/top/week/1?&album_previews=true', {
  //   headers: {
  //     Authorization: `Client-ID f9068c305c00fae`
  //   }
  // })
  // .then(res=>{
  //    return res.json()
  // })
  // .then(res=>{
  //     console.log(res);
  //     localStorage.setItem("data",JSON.stringify(res.data))
  // })
  // var interval = setInterval(function(){
  //   var countForVideo = document.querySelector("video").readyState;
  //   console.log(countForVideo);
  //   if(countForVideo == 4){
  //     document.querySelector('vedio').play();
  //     clearInterval(interval);
  //   }
  // },3000);

  // async function get(y){
  //   try{
  //     var target = y
  //       let res = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${target}&client_id=bKDk_VSMm4fMj-YsQmoPazBTryakSnWLj6NL88hTkH4`)
  //       let x  = await res.json()
  //       console.log(x);
  //     localStorage.setItem("data",JSON.stringify(x.results))
      
  //   }
  //   finally{

  //     }
  // }
  let data =  JSON.parse(localStorage.getItem("data"))
  
console.log(data);
  function append(){

     data.forEach(element => {
       let div = document.createElement("div")
       div.classList.add("card")
       div.innerHTML= `<div class="overlay"></div>
       <div class="vedio">
         <img src=${element.urls.small} alt="">
       </div>
       <div class="details">
         <h3>${element.alt_description}</h3>
         <div class="analytica">
           
         <span>123 <i class="fas fa-long-arrow-alt-down"></i></span>
         <span>18 <i class="fas fa-comment-alt"></i></span
         <span>100 <i class="fas fa-eye"></i></span
         </div>
       </div>`

       document.querySelector(".cards").append(div)
     });
  }
  append()

  window.addEventListener('scroll',function(){
    var footer = document.querySelector(".footer");
    footer.classList.toggle('sticky',window.scrollY)
    })

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        
        data=[...data,...data]
        append()
      }
    };

    window.addEventListener("scroll", handleScroll);