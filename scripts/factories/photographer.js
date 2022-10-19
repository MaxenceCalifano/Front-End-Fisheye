class photographerFactory {
    constructor(data, type) {
        this._name = data.name;
        this._portrait = data.portrait;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._id = data.id;
        this._type = type;
        this._picture = `assets/photographers/Photographers ID Photos/${this._portrait}`;

        this.getUserCardDOM = function getUserCardDOM() {
                
            const article = document.createElement( 'article' );
    
            const h2AndImage = document.createElement('a');
            h2AndImage.setAttribute("href", `photographer.html?id=${id}`)
            h2AndImage.setAttribute("aria-label", this._name)
    
            const userImg = new user(picture).createUserImg();
    
            const h2 = document.createElement( 'h2' );
            h2.textContent = this._name;
    
            const p = document.createElement("p");
            p.textContent = `${this._city}, ${this._country}`;
    
            const taglineText = document.createElement("p");
            taglineText.textContent = this._tagline;
    
            const priceText = document.createElement("p");
            priceText.textContent = `${this._price}€/jour`
            article.appendChild(h2AndImage);
            h2AndImage.appendChild(userImg);
            h2AndImage.appendChild(h2);
            article.appendChild(p);
            article.appendChild(taglineText);
            article.appendChild(priceText);
            return (article);
        }

        this.getPhotographerPage = function getPhotographerPage() {
            const photographer_profile = new photographerProfile(data).createPhotographerProfile();
            const userImg = new user(picture).createUserImg();
            const button = new contact_button().createButton();
            const priceCard = new price_card(this._price).createPriceCard();
            const dropDown = new dropdown().createDropDown();
            const contactModal = new contact_modal(this._name).render();
        
        return {photographer_profile: photographer_profile, userImg: userImg, button: button, priceCard: priceCard, dropDown : dropDown, contactModal: contactModal}
    }

        if(this._type === "homePage") {
            return  this.getUserCardDOM
            } else if(type === 'photographerPage') {
               return this.getPhotographerPage
            }     
         
        return { name: this._name, picture : this._picture, getUserCardDOM, getPhotographerPage }
    }
      
}