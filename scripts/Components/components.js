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

    photographerDiv.appendChild(h1);
    photographerDiv.appendChild(locationP);
    photographerDiv.appendChild(tagline);

    return  photographerDiv;
    }
}

class contact_button {
    createButton() {
        const button = document.createElement('button');
        button.classList.add('contact_button');
        button.setAttribute('onclick', 'displayModal()');
        button.textContent = 'Contactez-moi';
        // '<button class="contact_button" onclick="displayModal()">Contactez-moi</button>';
        return button;
    }
}

class photograph_header {
    constructor(data) {
        this._data = data
        this._image = `assets/photographers/Photographers ID Photos/${data.portrait}`
        }
    render() {
        const photographerProfile = new photographer_profile(this._data).createPhotographerProfile()
        const contactButton = new contact_button().createButton()
        const photographerAvatar = new user(this._image).createUserImg()

        const photographerHeaderContainer = document.createElement('div');
        photographerHeaderContainer.setAttribute('class', 'photograph-header')
        
        photographerHeaderContainer.append(photographerProfile, contactButton, photographerAvatar)

        return photographerHeaderContainer
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

        select.append(option1, option2, option3);

        dropdown.append(label, select);

        return dropdown;
    }
}

class contact_modal {
    constructor(name) {
        this._name = name;
    }
    render() {
        
        const contactModal = document.createElement('div');
        contactModal.setAttribute('id', 'contact_modal');
        contactModal.setAttribute('role', 'dialog');
        contactModal.setAttribute('aria-labelledby', 'contact_me');

        // MODAL DIV
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        contactModal.appendChild(modal);

        // HEADER
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'contact_me');
        h1.textContent =  `Contactez-moi ${this._name}`;
        const img = document.createElement('img');
        img.setAttribute('src', '../../assets/icons/close.svg');
        img.setAttribute('aria-label', 'Fermer le formulaire de contact');
        img.setAttribute('onclick', 'closeModal()');
        img.addEventListener('keydown', (event) =>{
            if(event.key === 'Enter' || event.key === 'Escape'){
                closeModal();
            }
        })
        img.setAttribute('tabindex', 0);

        header.append(h1, img);
       
        modal.appendChild(header);

        // FORM
        const form = document.createElement('form');
        form.setAttribute('novalidate', '');

        // FIRST NAME
        const firstNameLabel = document.createElement('label');
        firstNameLabel.setAttribute('for', 'prenom');
        firstNameLabel.textContent = 'Prénom';
        const firstNameInput = document.createElement('input');
        firstNameInput.setAttribute('id', 'prenom');
        firstNameInput.setAttribute('name', 'prenom');
        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('minlength', '2');
        firstNameInput.setAttribute('required', 'true');
        firstNameInput.setAttribute('aria-required', 'true');
        const firstNameErrorMessage =  document.createElement('span');
        firstNameErrorMessage.setAttribute('class', 'error');
        firstNameErrorMessage.setAttribute('aria-live', 'polite');

        form.append(firstNameLabel, firstNameInput, firstNameErrorMessage);
        
        // LAST NAME
        const lastNameLabel = document.createElement('label');
        lastNameLabel.setAttribute('for', 'nom');
        lastNameLabel.textContent = 'Nom';
        const lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('id', 'nom');
        lastNameInput.setAttribute('name', 'nom');
        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('minlength', '2');
        lastNameInput.setAttribute('required', 'true');
        lastNameInput.setAttribute('aria-required', 'true');
        const lastNameErrorMessage =  document.createElement('span');
        lastNameErrorMessage.setAttribute('class', 'error');
        lastNameErrorMessage.setAttribute('aria-live', 'polite');

        form.append(lastNameLabel, lastNameInput, lastNameErrorMessage);
       

        // EMAIL
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'Email';
        const emailInput = document.createElement('input');
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('required', 'true');
        emailInput.setAttribute('aria-required', 'true');
        const emailErrorMessage =  document.createElement('span');
        emailErrorMessage.setAttribute('class', 'error');
        emailErrorMessage.setAttribute('aria-live', 'polite');

        form.append(emailLabel, emailInput, emailErrorMessage);

        // MESSAGE
        const messageLabel = document.createElement('label');
        messageLabel.setAttribute('for', 'message');
        messageLabel.textContent = 'Votre message';
        const messageInput = document.createElement('textarea');
        messageInput.setAttribute('id', 'message');
        messageInput.setAttribute('name', 'message');
        messageInput.setAttribute('minlength', '20');
        messageInput.setAttribute('required', 'true');
        messageInput.setAttribute('aria-required', 'true');
        const messageErrorMessage =  document.createElement('span');
        messageErrorMessage.setAttribute('class', 'error');
        messageErrorMessage.setAttribute('aria-live', 'polite');
        
        form.append(messageLabel, messageInput, messageErrorMessage);

        // Button
        const button = document.createElement('button');
        button.setAttribute('class', 'contact_button');
        button.setAttribute('type', 'submit');
        button.setAttribute('aria-label', 'envoyer le formulaire de contact');
        button.textContent = 'Envoyer';
        form.appendChild(button);

        modal.appendChild(form);

        const testInput = (element, errorMessage) => {
            if(!element.validity.valid) {  
                element.setAttribute('aria-invalid', true);
                element.nextElementSibling.textContent = errorMessage;
            } else {
                element.setAttribute('aria-invalid', false);
                element.nextElementSibling.textContent = "";

            }
        }

        firstNameInput.addEventListener("blur", function() {
           testInput(this, "Veuillez entrer 2 caractères ou plus pour le champ prénom");
        })
        
        lastNameInput.addEventListener("blur", function() {
           testInput(this, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
        })
        emailInput.addEventListener("blur", function() {
           testInput(this, "Veuillez entrer une adresse email valide");
        })
        messageInput.addEventListener("blur", function() {
           testInput(this, "Veuillez laisser un message (20 caractères minimum)");
        })

        form.addEventListener("submit", function(e){
            e.preventDefault();
            form.reportValidity();
            const formData = new FormData(form);
            for (const [name,value] of formData) {
                console.log(name, ":", value)
            }
            })

        return contactModal;
    }
}

class lightbox {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.thumbs_gallery a figure > :first-child'));
        this.currentElement = "";
    }

    getLinks() {
        this.links.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this.currentElement = element;
                this.createLightBox(element);
            })  
        } );
        //return this.links;
    }

    next() {
        //Next
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.setAttribute('class', 'nextButton');
        nextButton.addEventListener('click', () => {
         if(this.links.indexOf(this.currentElement) === this.links.length - 1) {
           this.currentElement = this.links[0]
         } else {
           this.currentElement = this.links[this.links.indexOf(this.currentElement) +1]
         }
           console.log(this.currentElement);
          /*  img.setAttribute('src', element.src);
           img.setAttribute('alt', element.alt); */
           
        })
        return nextButton;
    }
    prev() {
        const prevButton = document.createElement('button');
        prevButton.setAttribute('class', 'prevButton');
        prevButton.textContent = "Précedent";
        prevButton.addEventListener('click', () => {
           if(this.links.indexOf(this.currentElement) === 0) {
               this.currentElement = this.links[this.links.length - 1]
             } else {
               this.currentElement = this.links[this.links.indexOf(this.currentElement) -1]
             }
           console.log(this.links.indexOf(element));
           img.setAttribute('src', this.currentElement.src);
           img.setAttribute('alt', this.currentElement.alt);
        })
        return prevButton;
    }
    createLightBox(element) {
        console.log(this.links.indexOf(element)) // Donne l'index de l'image
         // BUTTONS
         const lightbox = document.createElement('div');
         lightbox.classList.add("lightbox");
         
         const nextButton = this.next();
         const prevButton = this.prev();
        
         // Close
         const closeButton = document.createElement('button');
         closeButton.setAttribute('class', 'closeButton');
         closeButton.textContent = "Fermer";
         closeButton.addEventListener('click', () => lightbox.remove());
 
         // Create component
         const imageContainer = document.createElement('div');
         imageContainer.setAttribute('class', 'imageContainer');
         const img = document.createElement('img');
         img.setAttribute('src', element.src);
         img.setAttribute('alt', element.alt);

         //imageContainer.innerHTML = `${this.currentElement}`
         imageContainer.appendChild(img);
 
         lightbox.appendChild(prevButton);
         lightbox.appendChild(nextButton);
         lightbox.appendChild(closeButton);
         lightbox.appendChild(imageContainer);
         document.body.appendChild(lightbox)
        // return lightbox;
    }

    render() {
       this.getLinks();
    }
}