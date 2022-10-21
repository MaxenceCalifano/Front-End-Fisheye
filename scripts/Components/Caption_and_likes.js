import { likes } from './Likes.js';

class caption_and_likes {
    constructor(likes, title) {
        this._likes = likes;
        this._title = title;
    }
    render() {
        const captionAndLikesFlexDiv = document.createElement('div');
        captionAndLikesFlexDiv.className = "captionAndLikes";

        const likesComponent = new likes(this._likes).createLikesComponent();
        const caption = document.createElement('figcaption');
        caption.textContent = this._title;

        captionAndLikesFlexDiv.append(caption, likesComponent);

        return captionAndLikesFlexDiv;
    }
}

export { caption_and_likes };