let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
}

//header 
let header= document.querySelector("header");


window.addEventListener("scroll",() => {
    header.classList.toggle("shadow", window.scrollv > 0);
});