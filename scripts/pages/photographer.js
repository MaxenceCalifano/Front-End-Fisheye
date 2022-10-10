async function getPhotographer() {
    let url = new URL(window.location);
    const photographerID = url.searchParams.get("id")
    
    let photographer;
    let media;
    await fetch('../../data/photographers.json')
    .then(res => res.json())
    .then(res => { photographer = res.photographers, media = res.media})
    .catch(err => console.log('an error occurs', err))
    
    photographer = photographer.find( element => element.id == photographerID)
    media.filter( image => image.id == photographerID);
    console.log(media.filter( image => image.photographerId == photographerID))
    
    return ({photographer : photographer})
}

    
 function displayData(photographer) {
        const photographerSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographer, 'photographerPage');
        const userPageDOM = photographerModel.getPhotographerPage();
        
        photographerSection.appendChild(userPageDOM[0]);
        photographerSection.innerHTML += userPageDOM[2];
        photographerSection.appendChild(userPageDOM[1]);

};


async function init() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    displayData(photographer);
};

init();