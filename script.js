let hamburger = document.getElementById("hamburger");
let btnToList = document.querySelector("#btnToList");
let searchIcon = document.querySelector("#searchIcon")
let header = document.querySelector("#header")
let headerLeft = document.getElementById("headerLeft")
let headerRight = document.getElementById("headerRight")
let hiddenSearch = document.querySelector("#hiddenSearch")
let closeHidden = document.querySelector("#closeHidden")
let hamburger_isClicked = false;
let search_isClicked = false;

hamburger.addEventListener("click", ()=> {
    hamburger_isClicked = !hamburger_isClicked;
    btnToList.style.display = "flex"
    if (hamburger_isClicked) {
        hamburger.classList.add("bx-x")
        
    } else {
        hamburger.classList.remove("bx-x")
        btnToList.style.display = "none"
    }
})

searchIcon.addEventListener( 'click', ()=> {
    // search_isClicked = !search_isClicked;
    // if(search_isClicked){
    //     headerLeft.style.display = "none"
    //     headerRight.style.display = "none"
    //     hiddenSearch.style.display = "flex"
    //     header.classList.toggle('bg-white')
    // }
    headerLeft.style.display = "none"
    headerRight.style.display = "none"
    hiddenSearch.style.display = "flex"
    header.classList.toggle('bg-white')

}) 

closeHidden.addEventListener("click", () => {
        headerLeft.style.display = "flex";
        headerRight.style.display = "flex";
        hiddenSearch.style.display = "none"
        header.classList.toggle('bg-white')
})