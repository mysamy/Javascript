let titre = document.querySelector("h1");
console.log(titre);
console.log(titre.style.color);
console.log(titre.innerText);



titre.addEventListener("click", () => {
    titre.style.color = "red";
    
});