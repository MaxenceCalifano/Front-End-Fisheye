//import { TotalLikes } from './TotalLikes.js'

class price_card {
    constructor(price, likes) {
        this._price = price;
        this._likes = likes;
    }
    render() {
        const priceCard = document.createElement('div');
        priceCard.className = 'priceCard';

        const likesWrapper = document.createElement('div');
        likesWrapper.className = "likesWrapper";

        const likes = document.createElement('p');
        likes.setAttribute('class', 'like')
        likes.textContent = this._likes.result();

        const heart = document.createElement('span');
        heart.className = "heart priceCardHeart";
        likesWrapper.append(likes, heart)

        const priceHolder = document.createElement('p');
        priceHolder.textContent = `${this._price}€ / jour`;
        priceCard.append(likesWrapper, priceHolder);
        return priceCard;
    }
}

export { price_card }