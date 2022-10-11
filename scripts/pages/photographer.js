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

        const {photographer_profile} = photographerModel.getPhotographerPage();
        const {userImg} = photographerModel.getPhotographerPage();
        const {button} = photographerModel.getPhotographerPage();
        const {priceCard} = photographerModel.getPhotographerPage();
        
        photographerSection.appendChild(photographer_profile);
        photographerSection.innerHTML += button;
        photographerSection.appendChild(userImg);
        photographerSection.appendChild(priceCard);

        // Create the fixed price cards
       /*  const priceCard = document.createElement('div');
        priceCard.className = 'priceCard';
        main.appendChild(priceCard);
        const price = document.createElement('p');
        price.textContent = `${photographer.price}€ / jour`;
        priceCard.appendChild(price); */

};

async function displayMedia(photographerMedia, name) {
    const firstName = name.split(' ')[0].replace('-', ' ');

    const main = document.querySelector('main');
    const mediaSection = document.createElement("div");
    mediaSection.setAttribute("class", "thumbs_gallery")
    main.appendChild(mediaSection);

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