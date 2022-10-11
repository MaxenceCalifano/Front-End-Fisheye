function mediafactory(media, name) {
    //if l'objet a une propriété image ou vidéo
    if(media.image) {
        function getImageCard() {

            const imageLink = document.createElement('a');
            imageLink.href = "#";

            const imageWrapper = document.createElement('figure');

            const captionAndLikesFlexDiv = document.createElement('div');
            captionAndLikesFlexDiv.className = "captionAndLikes"


            const imageCaption = document.createElement('figcaption');
            imageCaption.textContent = media.title;

            const likesComponent = new likes(media.likes).createLikesComponent();

            const image = document.createElement('img');
            image.setAttribute('src', `../../assets/images/Sample Photos/${name}/${media.image}`);
            image.alt = media.title;

            imageWrapper.appendChild(image);

            captionAndLikesFlexDiv.appendChild(imageCaption);
            captionAndLikesFlexDiv.appendChild(likesComponent);
            imageWrapper.appendChild(captionAndLikesFlexDiv);

            imageLink.appendChild(imageWrapper);

            return imageLink;
        }
    } else if(media.video) {
        function getImageCard() {
            const videoLink = document.createElement('a');
            videoLink.href = "#";

            const videoWrapper = document.createElement('figure');

            const captionAndLikesFlexDiv = document.createElement('div');
            captionAndLikesFlexDiv.className = "captionAndLikes";

            const likesComponent = new likes(media.likes).createLikesComponent();


            const videoCaption = document.createElement('figcaption');
            videoCaption.textContent = media.title;


            const video = document.createElement("video");
            const source = document.createElement("source");

            video.setAttribute('controls', true);
            source.setAttribute('src', `../../assets/images/Sample Photos/${name}/${media.video}`);
            video.setAttribute('aria-label', "la lecture de la vidéo n'est pas lancée");

            video.appendChild(source);
            video.addEventListener('play', (e) => video.setAttribute('aria-label', 'la vidéo est en cours de lecture'));
            video.addEventListener('pause', (e) => video.setAttribute('aria-label', 'la vidéo est en pause'));
            video.addEventListener('ended', (e) => video.setAttribute('aria-label', 'la vidéo est arrétée car la lecture a atteint la fin'));


            videoWrapper.appendChild(video);
            captionAndLikesFlexDiv.appendChild(videoCaption);
            captionAndLikesFlexDiv.appendChild(likesComponent);
            videoWrapper.appendChild(captionAndLikesFlexDiv);
            videoLink.appendChild(videoWrapper);

            return videoLink;
        }
    } else {
        console.error("No file to display");
    }
    
    return {getImageCard};
}