import { price_card } from '../Components/PriceCard.js';
import { photograph_header} from '../Components/Photograph_Header.js';
import { logo } from '../Components/Logo.js';
import { dropdown } from '../Components/Dropdown.js';
import { contact_modal } from '../Components/ContactModal.js';
import { lightbox } from '../Components/Lightbox.js';
import { caption_and_likes } from '../Components/Caption_and_likes.js';
import { TotalLikes } from '../Components/TotalLikes.js'


import { mediaFactory } from '../factories/mediaFactory.js';


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

    
 function displayData(photographer, totalLikes, photographerMedia) {
        const header = document.querySelector("header");
        const fishEyeLogo = new logo().render();
        header.insertAdjacentElement('afterbegin',fishEyeLogo);
        
        const main = document.querySelector("main"); 

        const priceCard = new price_card(photographer.price, totalLikes).render();
        const dropDown = new dropdown().render();

        const contactModal = new contact_modal(photographer.name).render();

        const photographerHeader = new photograph_header(photographer).render();
        
        main.append(photographerHeader, priceCard, contactModal, dropDown);

        const firstName = photographer.name.split(' ')[0].replace('-', ' ');

        const thumbsGallery = document.createElement("div");
        thumbsGallery.setAttribute("class", "thumbs_gallery")
        main.appendChild(thumbsGallery);

      
         dropDown.addEventListener('change', (event) => {
            if(event.target.value ==='popularite') {
                photographerMedia.sort((a, b) => a.likes - b.likes )    
            } else if (event.target.value ==='date') {
                photographerMedia.sort((a, b) => new Date(a.date)  -  new Date(b.date))
            } else if(event.target.value ==='titre') {
                photographerMedia.sort((a, b) => a.title.localeCompare(b.title))
            }
           /*  const thumbs = document.querySelectorAll(".thumbs_gallery > *");
            thumbs.forEach(element => element.remove())
            createThumbnails(); */
            for (let i = 0; i < photographerMedia.length; i++) {
                photographerMedia[i].HTMLElement.style.order = i + 1;
            }
            console.log(photographerMedia)
        })
        
        // Default order
        photographerMedia.sort((a, b) => a.likes - b.likes )
        
        const createThumbnails = () => {
            photographerMedia.forEach( media => {
                const mediaWrapper = document.createElement('div');
                const imageCard = new mediaFactory(media, firstName);
                const captionAndLikes = new caption_and_likes(media.likes, media.title, totalLikes).render();
                mediaWrapper.append(imageCard, captionAndLikes)
                media.HTMLElement = mediaWrapper;
                thumbsGallery.appendChild(mediaWrapper);
            })
        }
        createThumbnails()
        console.log(photographerMedia)
};


async function init() {
    // Récupère les datas des photographes

    const { photographer } = await getPhotographer();
    const { photographerMedia } = await getPhotographer();

    let total = 0;
    photographerMedia.forEach( media => total += media.likes)
    const totalLikes = new TotalLikes(total);
    console.log(totalLikes)

    displayData(photographer, totalLikes, photographerMedia);
   // displayMedia(photographerMedia, photographer.name, totalLikes);
    const lightBox = new lightbox();
};

init();