var isFetching = false;
var query = "";

function handleSearch() {
    query = document.querySelector('#query').value;
    if(isFetching) {
        return;
    }
    else{
        isFetching = true;
    }

    setTimeout(() =>{
        isFetching = false;
        // call api
        console.log('query', query);
    }, 300)
}