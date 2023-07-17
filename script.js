//on compte le nombre de click
let watts = 0;
let nb_watts_clck = 1;
let cost = 2;

function actualisation_html() {
    document.querySelector('#resultat').innerText = watts;
    document.querySelector('#cost_upgrade').innerText = cost + ' watts';
   
}
function clicker () {
    watts += nb_watts_clck;
    console.log("watts", watts);
    actualisation_html();
}

document.querySelector('#power_img').addEventListener("click", clicker);
document.querySelector(".upgrade").addEventListener("click", function(){
    if(watts >= cost) {
        watts = watts - cost;
        actualisation_html()
        nb_watts_clck++;
        cost = cost*2;
    } else {
        actualisation_html("")
    }
});


function createParticule(x, y) {
    const powerClicks = document.querySelector(".power-clicks");

    const particule = document.createElement("img");
    particule.setAttribute("src", "./img/logo_energie2.png");
    particule.setAttribute("class", "power-particule");
    particule.style.left = x + "px";
    particule.style.top = y + "px";

    powerClicks.appendChild(particule);

    setTimeout(() => {
        powerClicks.removeChild(particule);
    }, 3000);
}

const power_img = document.querySelector("#power_img");
power_img.addEventListener("click", (e) => {
    createParticule(e.clientX, e.clientY);
    powerClicked();
});

