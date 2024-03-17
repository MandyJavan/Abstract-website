let hamburger = document.getElementById("hamburger");
let btnToList = document.querySelector("#btnToList");
let hamburger_isClicked = false;

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