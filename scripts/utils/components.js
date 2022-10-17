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

class contact_modal {
    render() {
        const contactModal = document.createElement('div');
        contactModal.setAttribute('id', 'contact_modal');
        contactModal.setAttribute('role', 'dialog');

        // MODAL DIV
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        contactModal.appendChild(modal);

        // HEADER
        const header = document.createElement('header');
        const h2 = document.createElement('h2');
        h2.textContent = "Contactez-moi"; // TODO ajouter le nom du photographe
        const img = document.createElement('img'); // TODO rendre accessible
        img.setAttribute('src', '../../assets/icons/close.svg');
        img.setAttribute('onclick', 'closeModal()');

        header.appendChild(h2);
        header.appendChild(img);
        modal.appendChild(header);

        // FORM
        const form = document.createElement('form');

        const firstNameLabel = document.createElement('label');
        firstNameLabel.setAttribute('for', 'prenom');
        firstNameLabel.textContent = 'Prénom';
        const firstNameInput = document.createElement('input');
        firstNameInput.setAttribute('id', 'prenom');
        firstNameInput.setAttribute('name', 'prenom');
        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('minlength', '2');
        firstNameInput.setAttribute('required', 'true');
        form.appendChild(firstNameLabel);
        form.appendChild(firstNameInput);
        
        const lastNameLabel = document.createElement('label');
        lastNameLabel.setAttribute('for', 'nom');
        lastNameLabel.textContent = 'Nom';
        const lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('id', 'nom');
        lastNameInput.setAttribute('name', 'nom');
        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('minlength', '2');
        lastNameInput.setAttribute('required', 'true');
        form.appendChild(lastNameLabel);
        form.appendChild(lastNameInput);

        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'Email';
        const emailInput = document.createElement('input');
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('required', 'true');
        form.appendChild(emailLabel);
        form.appendChild(emailInput);

        const messageLabel = document.createElement('label');
        messageLabel.setAttribute('for', 'message');
        messageLabel.textContent = 'Votre message';
        const messageInput = document.createElement('textarea');
        messageInput.setAttribute('id', 'message');
        messageInput.setAttribute('name', 'message');
        messageInput.setAttribute('minlength', '20');
        messageInput.setAttribute('required', 'true');
        form.appendChild(messageLabel);
        form.appendChild(messageInput);

        // Button
        const button = document.createElement('button');
        button.setAttribute('class', 'contact_button');
        button.textContent = 'Envoyer';
        form.appendChild(button);

        modal.appendChild(form);

        return contactModal;
    }
}