class video_thumbnail {
    constructor(media, name) {
        this._media = media;
        this._name = name;
    }
    render() {
        const videoLink = document.createElement('a');
        videoLink.href = "#";
        videoLink.setAttribute('aria-label', "Ouvrir la vidéo en plein écran")

        const videoWrapper = document.createElement('figure');

        const video = document.createElement("video");
        const source = document.createElement("source");

        source.setAttribute('src', `../../assets/images/Sample Photos/${this._name}/${this._media.video}`);
        video.setAttribute('aria-label', "la lecture de la vidéo n'est pas lancée");
        video.setAttribute('controls', true)

        video.appendChild(source);
        video.addEventListener('play', () => video.setAttribute('aria-label', 'la vidéo est en cours de lecture'));
        video.addEventListener('pause', () => video.setAttribute('aria-label', 'la vidéo est en pause'));
        video.addEventListener('ended', () => video.setAttribute('aria-label', 'la vidéo est arrétée car la lecture a atteint la fin'));

        videoWrapper.appendChild(video);
      
        videoLink.appendChild(videoWrapper);

        return videoLink;
    }
}

export { video_thumbnail }