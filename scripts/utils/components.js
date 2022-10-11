class user {
    constructor(picture) {
        this._picture = picture;
    }

    createUserImg() {
        const img = document.createElement( 'img' );
        img.setAttribute("src", this._picture);
        img.setAttribute("alt", "");
        img.setAttribute("class", "user");

        return img
    }
}

class photographerProfile {
    constructor(data) {
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
    }
    createPhotographerProfile() {
    const photographerDiv = document.createElement('div');
    photographerDiv.setAttribute("class", "photographer-profile");

    const h1 = document.createElement('h1');
    const locationP = document.createElement('p');
    const tagline= document.createElement('p');

    h1.textContent = this._name;
    locationP.textContent = `${this._city}, ${this._country}`;
    tagline.textContent = this._tagline;

    photographerDiv.appendChild(h1);
    photographerDiv.appendChild(locationP);
    photographerDiv.appendChild(tagline);

    return  photographerDiv;
    }
}

class contact_button {
    createButton() {
        const button = '<button class="contact_button" onclick="displayModal()">Contactez-moi</button>';
        return button;
    }
}

class price_card {
    constructor(price) {
        this._price = price;
    }
    createPriceCard() {
        const priceCard = document.createElement('div');
        priceCard.className = 'priceCard';
        const priceHolder = document.createElement('p');
        priceHolder.textContent = `${this._price}€ / jour`;
        priceCard.appendChild(priceHolder);
        return priceCard;
    }
}

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
        likes.appendChild(heart);

        return likes;
    }
}