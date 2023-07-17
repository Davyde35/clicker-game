
let watts = 0;
let nb_watts_clck = 1;
let cost = 2; // prix d'un upgrade

// let autoClick = 1;
// const autoClick = document.getElementById("auto-click")

// fonction qui actualisera les éléments html 
function actualisation_html() {
    document.querySelector('#resultat').innerText = watts;
    document.querySelector('#cost_upgrade').innerText = cost + ' watts';
}

//La constante powerCliked associe la valeurs watts au nombre de click
const powerClicked = () => {
    watts += nb_watts_clck;
    console.log("watts", watts);
    actualisation_html();
}

// grâce à un écouteur d'événement, on définit un coût en watt pour que les clicks aient plus de valeurs
document.querySelector(".upgrade").addEventListener("click", function(){
    if(watts >= cost) {
        watts = watts - cost;
        nb_watts_clck++;
        cost = cost + 2;
    } 
    actualisation_html()
});

// cette fonction créer une particule ayant une position en x et y
function createParticule(x, y) {
    const powerClicks = document.querySelector(".power-clicks");
    const particule = document.createElement("img"); // on créer une image
    particule.setAttribute("src", "./img/power.png"); // on attribue un document à l'image
    particule.setAttribute("class", "power-particule"); // on associe une classe
    particule.style.left = x + "px";
    particule.style.top = y + "px";

        powerClicks.appendChild(particule);  // l'image créé sera associé en tant qu'enfant de la const par la la classe power-clicks

       const clickSound = document.getElementById("son");
       clickSound.currentTime = 0;
       clickSound.play();

    setTimeout(() => {
        powerClicks.removeChild(particule); 
    }, 3000);
}
// quand on click sur l'image principale, on appelle les deux fonctions deux jeux, la particule et le powercliker
const power_img = document.querySelector("#power_img");
power_img.addEventListener("click", (evenement) => {
    createParticule(evenement.clientX, evenement.clientY);
    powerClicked(); // on appelle la constante powerCliked
});


// function autoClick () {


// }