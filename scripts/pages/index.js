import { logo } from '../Components/Logo.js';
import { photographerFactory } from '../factories/photographerFactory.js';

async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let photographers;
    await fetch('https://maxencecalifano.github.io/Front-End-Fisheye/data/photographers.json')
    .then(res => res.json())
    .then(res => { photographers = res.photographers})
    .catch(err => console.log('an error occurs', err))
    
   
    
    // et bien retourner le tableau photographers seulement une fois
    return ({photographers : photographers})
}

async function displayData(photographers) {

    const header = document.querySelector("header");
    const fishEyeLogo = new logo().render();
    header.insertAdjacentElement('afterbegin',fishEyeLogo);

    const photographersSection = document.querySelector(".photographer_section");
   
    photographers.forEach((photographer) => {
        //const photographerModel = photographerFactory(photographer);
        const userCardDOM = new photographerFactory(photographer);
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();