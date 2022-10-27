//import { TotalLikes } from './TotalLikes.js'

class price_card {
    constructor(price, likes) {
        this._price = price;
        this._likes = likes;
    }
    render() {
        const priceCard = document.createElement('div');
        priceCard.className = 'priceCard';
        const likes = document.createElement('p');
        likes.setAttribute('id', 'test')
        likes.textContent = this._likes.result();
        const priceHolder = document.createElement('p');
        priceHolder.textContent = `${this._price}€ / jour`;
        priceCard.append(likes, priceHolder);
        return priceCard;
    }
}

export { price_card }