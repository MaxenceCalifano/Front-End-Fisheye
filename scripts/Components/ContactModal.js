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

        const close = document.createElement('button');
        close.textContent = "Fermer";

        const img = document.createElement('img');
        img.setAttribute('src', '../../assets/icons/closeContact.svg');
        img.setAttribute('alt', "");
        close.setAttribute('aria-label', 'Fermer le formulaire de contact');
        close.setAttribute('onclick', 'closeModal()');

        close.appendChild(img);

        header.append(h1, close);
       
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
        firstNameInput.setAttribute('placeholder', 'Prénom');
        const firstNameErrorMessage =  document.createElement('span');
        firstNameErrorMessage.setAttribute('class', 'error');
        firstNameErrorMessage.setAttribute('aria-live', 'polite');

        const firstName = document.createElement('div');
        firstName.className = "input";
        firstName.append(firstNameLabel, firstNameInput, firstNameErrorMessage);
        form.appendChild(firstName);  
        
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
        lastNameInput.setAttribute('placeholder', 'Nom');
        const lastNameErrorMessage =  document.createElement('span');
        lastNameErrorMessage.setAttribute('class', 'error');
        lastNameErrorMessage.setAttribute('aria-live', 'polite');

        const lastName = document.createElement('div');
        lastName.className = "input";
        lastName.append(lastNameLabel, lastNameInput, lastNameErrorMessage);
        form.appendChild(lastName);     

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
        emailInput.setAttribute('placeholder', 'Email');
        const emailErrorMessage =  document.createElement('span');
        emailErrorMessage.setAttribute('class', 'error');
        emailErrorMessage.setAttribute('aria-live', 'polite');

        const email = document.createElement('div');
        email.className = "input";
        email.append(emailLabel, emailInput, emailErrorMessage);
        form.appendChild(email);

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
        messageInput.setAttribute('placeholder', 'Ecrivez un message au photographe');
        const messageErrorMessage =  document.createElement('span');
        messageErrorMessage.setAttribute('class', 'error');
        messageErrorMessage.setAttribute('aria-live', 'polite');

        const message = document.createElement('div');
        message.className = "input";

        message.append(messageLabel, messageInput, messageErrorMessage);
        form.appendChild(message);

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
export { contact_modal }