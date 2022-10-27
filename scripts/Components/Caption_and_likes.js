import { likes } from './Likes.js';

class caption_and_likes {
    constructor(likes, title, totalLikes) {
        this._likes = likes;
        this._title = title;
        this._totalLikes = totalLikes;
    }
    render() {
        const captionAndLikesFlexDiv = document.createElement('div');
        captionAndLikesFlexDiv.className = "captionAndLikes";

        const likesComponent = new likes(this._likes, this._totalLikes).createLikesComponent();
        const caption = document.createElement('figcaption');
        caption.textContent = this._title;

        captionAndLikesFlexDiv.append(caption, likesComponent);

        return captionAndLikesFlexDiv;
    }
}

export { caption_and_likes };