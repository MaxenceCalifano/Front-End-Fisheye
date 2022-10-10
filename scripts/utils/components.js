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

    /* const photographerCard = `<h2>${this._name}</h2>
                                <p>${this._city}, ${this._country}</p>
                                <p>${this._tagline}</p>`; */
    //photographerDiv.innerHTML = photographerCard;
    console.log(photographerDiv)
    return   photographerDiv;
    }
}

