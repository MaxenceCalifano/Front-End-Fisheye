function mediafactory(media, name) {
    //if l'objet a une propriété image ou vidéo
    if(media.image) {
        function getImageCard() {
            const image = document.createElement('img');
            image.setAttribute('src', `../../assets/images/Sample Photos/${name}/${media.image}`);
            return image;
        }
    } else if(media.video) {
        function getImageCard() {
            const video = document.createElement("video");
            const source = document.createElement("source");

            video.setAttribute('controls', true);
            source.setAttribute('src', `../../assets/images/Sample Photos/${name}/${media.video}`)

            video.appendChild(source);
            console.log(video);
            return video;
        }
    } else {
        console.error("No file to display");
    }
    
    return {getImageCard};
}