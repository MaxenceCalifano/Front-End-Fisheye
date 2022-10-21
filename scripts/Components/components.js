/* class logo {
    render() {
        const homeLink = document.createElement('a');
        homeLink.setAttribute('href', 'index.html');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('alt', 'Fisheye Home page');
        logoImg.setAttribute('src', 'assets/images/logo.png');
        logoImg.setAttribute('class', 'logo');
       
        homeLink.appendChild(logoImg);

        return homeLink;
    }
} */

/* class user {
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
} */

/* class photographer_profile {
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
} */

/* class contact_button {
    createButton() {
        const button = document.createElement('button');
        button.classList.add('contact_button');
        button.setAttribute('onclick', 'displayModal()');
        button.textContent = 'Contactez-moi';
        // '<button class="contact_button" onclick="displayModal()">Contactez-moi</button>';
        return button;
    }
} */

/* class photograph_header {
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
} */

/* class likes {
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
} */

/* class dropdown {
    render() {

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
} */

/* class contact_modal {
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
} */

/*class lightbox {
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
*/
/* class userCard {
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
} */

/* class image_thumbnail {
    constructor(media, name) {
        this._media = media;
        this._name = name;
    }
    render() {
            const imageLink = document.createElement('a');
            imageLink.href = "#";

            const imageWrapper = document.createElement('figure');

            const image = document.createElement('img');
            image.setAttribute('src', `../../assets/images/Sample Photos/${this._name}/${this._media.image}`);
            image.alt = this._media.title;

            imageWrapper.appendChild(image);

            imageLink.appendChild(imageWrapper);

            return imageLink;
    }
} */

class video_thumbnail {
    constructor(media, name) {
        this._media = media;
        this._name = name;
    }
    render() {
        const videoLink = document.createElement('a');
        videoLink.href = "#";

        const videoWrapper = document.createElement('figure');

        const video = document.createElement("video");
        const source = document.createElement("source");

        source.setAttribute('src', `../../assets/images/Sample Photos/${this._name}/${this._media.video}`);
        video.setAttribute('aria-label', "la lecture de la vidéo n'est pas lancée");
        video.setAttribute('controls', true)

        video.appendChild(source);
        video.addEventListener('play', (e) => video.setAttribute('aria-label', 'la vidéo est en cours de lecture'));
        video.addEventListener('pause', (e) => video.setAttribute('aria-label', 'la vidéo est en pause'));
        video.addEventListener('ended', (e) => video.setAttribute('aria-label', 'la vidéo est arrétée car la lecture a atteint la fin'));

        videoWrapper.appendChild(video);
      
        videoLink.appendChild(videoWrapper);

        return videoLink;
    }
}


/* class caption_and_likes {
    constructor(likes, title) {
        this._likes = likes;
        this._title = title;
    }
    render() {
        const captionAndLikesFlexDiv = document.createElement('div');
        captionAndLikesFlexDiv.className = "captionAndLikes";

        const likesComponent = new likes(this._likes).createLikesComponent();
        const caption = document.createElement('figcaption');
        caption.textContent = this._title;

        captionAndLikesFlexDiv.append(caption, likesComponent);

        return captionAndLikesFlexDiv;
    }
} */