function mediafactory(media, name) {
    //if l'objet a une propriété image ou vidéo
    function getImageCard() {
        const image = document.createElement('img');
        image.setAttribute('src', `../../assets/images/Sample Photos/${name}/${media.image}`)
        return image;
    }
    return {getImageCard};
}