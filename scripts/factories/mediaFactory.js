import { image_thumbnail } from '../Components/ImageThumbnail.js';

function mediaFactory(media, name) {
    //if l'objet a une propriété image ou vidéo
    if(media.image) {
        function getImageCard() {

            const imageThumbnail = new image_thumbnail(media, name).render()
            return imageThumbnail;
        }
    } else if(media.video) {
        function getImageCard() {
            const videoThumbnail = new video_thumbnail(media, name).render();
            return videoThumbnail;
        }
    } else {
        console.error("No file to display");
    }
    
    return {getImageCard};
}

export { mediaFactory };