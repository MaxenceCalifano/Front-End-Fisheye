 import { image_thumbnail } from '../Components/ImageThumbnail.js';
 import { video_thumbnail } from '../Components/VideoThumbnail.js';
class mediaFactory {
    constructor(media, name) {
        this._media = media;
        this._name = name;

        if(this._media.image) {  
                const imageThumbnail = new image_thumbnail(this._media, this._name).render()
                return imageThumbnail;
        } if(this._media.video) {
                const videoThumbnail = new video_thumbnail(this._media, this._name).render();
                return videoThumbnail;
        }

        return console.error("No file to display");
    }
}

export { mediaFactory }