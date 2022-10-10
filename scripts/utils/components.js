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
    const photographerDiv = document.createElement('div')
    const h1 = document.createElement('h1');
    const locationP = document.createElement('p');
    const tagline= document.createElement('p');

    h1.textContent = this._name;
    locationP.textContent = `${this._city}, ${this._country}`;
    tagline.textContent = this._tagline;

    photographerDiv.appendChild(h1);
    photographerDiv.appendChild(locationP);
    photographerDiv.appendChild(tagline);

    return   photographerDiv;
    }
}

class photograph_header {
    constructor(picture, data) {
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._picture = picture;
    }
    createPhotographeHeader() {
        const div = document.querySelector('.photograph-header');
        const avatar = new this._avatar;
        console.log(avatar)
        //div.appendChild()
    }
    createPhotographerProfile() {
        const photographerDiv = document.createElement('div')
        const h1 = document.createElement('h1');
        const locationP = document.createElement('p');
        const tagline= document.createElement('p');
    
        h1.textContent = this._name;
        locationP.textContent = `${this._city}, ${this._country}`;
        tagline.textContent = this._tagline;
    
        photographerDiv.appendChild(h1);
        photographerDiv.appendChild(locationP);
        photographerDiv.appendChild(tagline);
    
        return   photographerDiv;
        }
        createUserImg() {
            const img = document.createElement( 'img' );
            img.setAttribute("src", this._picture);
            img.setAttribute("alt", "");
            img.setAttribute("class", "user");
    
            return img
        }
}

class contact_button {
    createButton() {
        const button = '<button class="contact_button" onclick="displayModal()">Contactez-moi</button>';
        return button;
    }
}