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
    // fetchQueryData(val);
}

function fetchQueryData(query) {

    fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=bKDk_VSMm4fMj-YsQmoPazBTryakSnWLj6NL88hTkH4`)
        .then((res) => {
            return res.json();
        }).then((res) => {
            let data = res.results;
            console.log(data);
            
        }).catch((err) => {
            console.log(err);
        })
}