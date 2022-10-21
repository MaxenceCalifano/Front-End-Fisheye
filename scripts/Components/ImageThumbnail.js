class image_thumbnail {
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
}

export { image_thumbnail }; 