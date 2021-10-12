
let data=[]
let page = 1
  async function get(page){
    try{
      
        let res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=L&client_id=bKDk_VSMm4fMj-YsQmoPazBTryakSnWLj6NL88hTkH4`)
        let x  = await res.json()
        console.log(x);
        
        data = [...data,...x.results]
        data.shift()
        data.shift()
        append()
    }
    finally{

      }
  }
  get(page)
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
    var cards = document.querySelector(".cards");
    footer.classList.toggle('sticky',window.scrollY)
    cards.classList.toggle('drop',window.scrollY)
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
        
        page += 1

        get(page)
      }
    };

    window.addEventListener("scroll", handleScroll);



    var isFetching = false;
var query = "";

function handleSearch() {
    document.querySelector('.search-result').setAttribute('style', "display: inline");
    query = document.querySelector('#query').value;
    if (isFetching) {
        return;
    }
    else {
        isFetching = true;
    }

    setTimeout(() => {
        isFetching = false;

        fetch(`https://webit-keyword-search.p.rapidapi.com/autosuggest?q=${query}&language=en`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "webit-keyword-search.p.rapidapi.com",
                "x-rapidapi-key": "ff657517bcmsh092c91dfc8e6c66p100dedjsneabffd262afd"
            }
        })
            .then((res) => {
                return res.json();
            })
            .then(res => {
                let data = res.data.results;
                document.querySelector('.searchBox').innerHTML = null;
                data.forEach((el) => {
                    if (el != null) {
                        let li = document.createElement('li');
                        li.innerHTML = `${el}`;
                        li.setAttribute('onclick', `handleInputVal('${el}')`)
                        document.querySelector('.searchBox').append(li);
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
    }, 300)
}

function handleInputVal(val) {
    let inputBox = document.querySelector('#query');
    inputBox.value = val;
    document.querySelector('.search-result').setAttribute('style', "display: none");
    fetchQueryData(val);
}

function fetchQueryData(query) {
console.log(query);
    fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=bKDk_VSMm4fMj-YsQmoPazBTryakSnWLj6NL88hTkH4`)
        .then((res) => {
            return res.json();
        }).then((res) => {
            let x = res.results;
            console.log(x);
            data =[...x]
            append()
        }).catch((err) => {
            console.log(err);
        })
}