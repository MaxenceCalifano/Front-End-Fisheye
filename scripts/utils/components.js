class user {
    constructor(picture) {
        this._picture = picture;
    }

    createUserImg() {
        const img = document.createElement( 'img' );
        img.setAttribute("src", this._picture);
        img.setAttribute("alt", "");
        img.setAttribute("class", "user");

        return img;
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

class dropdown {
    createDropDown() {
        /* let dropdown = document.createElement('div');
        const label = document.createElement('p');
        label.textContent = 'labbeledby:';

        let optionContainer = document.createElement('div');
        optionContainer.setAttribute('class', 'dropdown_options');


        const option1 = document.createElement('button');
        option1.textContent = 'Popularité';
        option1.setAttribute('class', 'contact_button');

        const option2 = document.createElement('button');
        option2.textContent = 'Date';
        option2.setAttribute('class', 'contact_button');


        const option3 = document.createElement('button');
        option3.textContent = 'Titre';
        option3.setAttribute('class', 'contact_button');


        dropdown.appendChild(label);
        optionContainer.appendChild(option1);
        optionContainer.appendChild(option2);
        optionContainer.appendChild(option3);
        dropdown.appendChild(optionContainer); */

        const dropdown = document.createElement('div');
        dropdown.setAttribute('class', 'dropdown_wrapper')
        const label = document.createElement('label');
        label.setAttribute('for', 'order-by');
        label.textContent = "Trier par";

        const select = document.createElement("select");
        select.setAttribute("name", "order-by");
        select.setAttribute("id", "order-by");
        select.setAttribute("class", "dropdown");

        const option1 = document.createElement('option');
        option1.setAttribute('value', 'popularite');
        option1.textContent = "Popularité";
        
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'date');
        option2.textContent = "Date";
        
        const option3 = document.createElement('option');
        option3.setAttribute('value', 'titre');
        option3.textContent = "Titre";

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        dropdown.appendChild(label);
        dropdown.appendChild(select);

        return dropdown;
    }
}

