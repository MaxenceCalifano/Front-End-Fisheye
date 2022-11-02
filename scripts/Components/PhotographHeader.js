import { photographer_profile } from './PhotographerProfile.js';
import { contact_button } from './ContactButton.js';
import { user } from './User.js';

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

export { photograph_header }