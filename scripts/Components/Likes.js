class likes {
    constructor(likes) {
        this._likes = likes;
    }
    createLikesComponent() {
        const likes = document.createElement('div');
        likes.className = "likes";
        const likesText = document.createElement('p');
        likesText.textContent = this._likes;
        likes.appendChild(likesText);
        const heart = document.createElement('span');
        heart.className = "heart";
        heart.addEventListener('click', () => {
            this._likes = this._likes + 1;
            likesText.textContent = this._likes;
        })
        likes.appendChild(heart);

        return likes;
    }
}

export { likes };