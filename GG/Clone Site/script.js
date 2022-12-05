let icones = document.querySelector(".iconMenu");//hamburguer
let lista = document.querySelector('.list');//navMenu

icones.addEventListener("click", () => {
    icones.classList.toggle("active");
    lista.classList.toggle("active");
});