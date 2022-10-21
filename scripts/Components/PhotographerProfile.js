class photographer_profile {
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

    photographerDiv.append(h1, locationP, tagline);
    
    return  photographerDiv;
    }
}

export { photographer_profile }