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
    const photographersSection = document.querySelector(".photographer_section");
   
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer, "homePage");
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();