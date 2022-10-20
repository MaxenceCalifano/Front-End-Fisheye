async function getPhotographer() {
    let url = new URL(window.location);
    const photographerID = url.searchParams.get("id")
    
    let photographer;
    let media;
    await fetch('https://maxencecalifano.github.io/Front-End-Fisheye/data/photographers.json')
    .then(res => res.json())
    .then(res => { photographer = res.photographers, media = res.media})
    .catch(err => console.log('an error occurs', err))
    
    photographer = photographer.find( element => element.id == photographerID);

    const photographerMedia = media.filter( image => image.photographerId == photographerID);
    
    return ({photographer : photographer, photographerMedia: photographerMedia})
}

    
 function displayData(photographer) {
        const header = document.querySelector("header");
        const fishEyeLogo = new logo().render();
        header.insertAdjacentElement('afterbegin',fishEyeLogo);
        
        const main = document.querySelector("main"); 

        const priceCard = new price_card(photographer.price).render();
        const dropDown = new dropdown().render();
        const contactModal = new contact_modal(photographer.name).render();

        const photographerHeader = new photograph_header(photographer).render();
        
        main.append(photographerHeader, priceCard, contactModal, dropDown);


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
    const lightBox = new lightbox().render(); // Elle s'append elle meme dans la class, à modifier
};

init();