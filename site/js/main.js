function products(){
    let thing = document.querySelector(".productsmenu") 
    thing.classList.toggle("menuactivate")
    let aboutusmenu = document.querySelector(".aboutusmenu") 
    aboutusmenu.classList.remove("menuactivate")
}

function aboutus(){
    let thing = document.querySelector(".aboutusmenu") 
    thing.classList.toggle("menuactivate")
    let productsmenu = document.querySelector(".productsmenu") 
    productsmenu.classList.remove("menuactivate")
}
