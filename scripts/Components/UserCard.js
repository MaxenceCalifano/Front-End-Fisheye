import { user } from './User.js';

class userCard {
    constructor(data) {
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._picture = `assets/photographers/Photographers ID Photos/${data.portrait}`;
        this._tagline = data.tagline;
        this._price = data.price;
        this._id = data.id;
    }
    render() {
            const article = document.createElement( 'article' );
    
            const h2AndImage = document.createElement('a');
            h2AndImage.setAttribute("href", `photographer.html?id=${this._id}`)
            h2AndImage.setAttribute("aria-label", this._name)
    
            const userImg = new user(this._picture).createUserImg();
    
            const h2 = document.createElement( 'h2' );
            h2.textContent = this._name;
    
            const p = document.createElement("p");
            p.textContent = `${this._city}, ${this._country}`;
    
            const taglineText = document.createElement("p");
            taglineText.textContent = this._tagline;
    
            const priceText = document.createElement("p");
            priceText.textContent = `${this._price}€/jour`
            article.appendChild(h2AndImage);

            h2AndImage.append(userImg, h2);
            
            article.append(p, taglineText, priceText);
           
            return article;
    }
}

export { userCard };