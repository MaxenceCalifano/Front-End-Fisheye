import { TotalLikes } from './TotalLikes.js'

class likes {
    constructor(likes, totalLikes) {
        this._likes = likes;
        this._totalLikes = totalLikes;
        this._isLiked = false;
    }
    createLikesComponent() {
        const like = document.querySelector('.like');

        const likes = document.createElement('div');
        likes.className = "likes";
        const likesText = document.createElement('p');
        likesText.textContent = this._likes;
        likes.appendChild(likesText);
        const heart = document.createElement('span');
        heart.className = "heart";
        heart.addEventListener('click', () => {
                if(!this._isLiked) {
                    this._likes = this._likes + 1;
                    this._isLiked = true;
                    likesText.textContent = this._likes;
                    this._totalLikes.increment();

                    like.textContent = this._totalLikes.result()
                } else {
                    this._likes = this._likes - 1;
                    this._isLiked = false;
                    likesText.textContent = this._likes;
                    this._totalLikes.decrement();

                    like.textContent = this._totalLikes.result()
                }
            
        })
        likes.appendChild(heart);

        return likes;
    }
}

export { likes };