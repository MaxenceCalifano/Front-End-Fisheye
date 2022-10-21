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

export { contact_button }