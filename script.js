//on compte le nombre de click
let watts = 0;
let nb_watts_clck = 1;
let cost = 2;
// let autoClick = 1;
// const autoClick = document.getElementById("auto-click")

function actualisation_html() {
    document.querySelector('#resultat').innerText = watts;
    document.querySelector('#cost_upgrade').innerText = cost + ' watts';
}

const powerClicked = () => {
    watts += nb_watts_clck;
    console.log("watts", watts);
    actualisation_html();
}
document.querySelector(".upgrade").addEventListener("click", function(){
    if(watts >= cost) {
        watts = watts - cost;
        nb_watts_clck++;
        cost = cost + 2;
    } 
    actualisation_html()
});

function createParticule(x, y) {
    const powerClicks = document.querySelector(".power-clicks");
    const particule = document.createElement("img");
    particule.setAttribute("src", "./img/power.png");
    particule.setAttribute("class", "power-particule");
    particule.style.left = x + "px";
    particule.style.top = y + "px";

    powerClicks.appendChild(particule);

       const clickSound = document.getElementById("son");
       clickSound.currentTime = 0;
       clickSound.play();

    setTimeout(() => {
        powerClicks.removeChild(particule);
    }, 3000);
}

const power_img = document.querySelector("#power_img");
power_img.addEventListener("click", (evenement) => {
    createParticule(evenement.clientX, evenement.clientY);
    powerClicked();
});


// function autoClick () {


// }