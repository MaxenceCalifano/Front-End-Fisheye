async function getPhotographer() {
    let url = new URL(window.location);
    const photographerID = url.searchParams.get("id")
    
    let photographer;
    let media;
    await fetch('../../data/photographers.json')
    .then(res => res.json())
    .then(res => { photographer = res.photographers, media = res.media})
    .catch(err => console.log('an error occurs', err))
    
    photographer = photographer.find( element => element.id == photographerID);

    const photographerMedia = media.filter( image => image.photographerId == photographerID);
    
    return ({photographer : photographer, photographerMedia: photographerMedia})
}

    
 function displayData(photographer) {
        const photographerSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographer, 'photographerPage');
        const userPageDOM = photographerModel.getPhotographerPage();
        
        photographerSection.appendChild(userPageDOM[0]);
        photographerSection.innerHTML += userPageDOM[2];
        photographerSection.appendChild(userPageDOM[1]);

};

async function displayMedia(photographerMedia, name) {
    const firstName = name.split(' ')[0].replace('-', ' ');

    console.log(firstName)
    const mediaSection = document.querySelector("main");
    photographerMedia.forEach( media => {
        const mediaModel = mediafactory(media, firstName);
        const imageCard = mediaModel.getImageCard();
        mediaSection.appendChild(imageCard);
    })
}

async function init() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    const { photographerMedia } = await getPhotographer();
   //console.log(photographer)
    displayData(photographer);
    displayMedia(photographerMedia, photographer.name);
};

init();