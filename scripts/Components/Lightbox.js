class lightbox {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.thumbs_gallery a figure > :first-child'));
        this.currentElementIndex;
       
        this.firstElement;

        this.links.forEach((element) => {
          element.addEventListener('click', (event) => {
              event.preventDefault();
              this.currentElementIndex = this.links.indexOf(element);
              this.lightbox = this.createLightBox();
          })  
      } );

    }

    next() {
        //Next
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.setAttribute('class', 'nextButton');
        nextButton.addEventListener('click', () => {

         if(this.currentElementIndex < this.links.length-1) {
          this.currentElementIndex++;
          this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}vw`;
         } else {
          this.currentElementIndex = 0;
          this.firstElement.style.marginLeft = 0;
         }
        })
        return nextButton;
    }
    prev() {
        const prevButton = document.createElement('button');
        prevButton.setAttribute('class', 'prevButton');
        prevButton.textContent = "Précedent";
        prevButton.addEventListener('click', () => {

           if(this.currentElementIndex > 0) {
            this.currentElementIndex--;
            this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}vw`;
            console.log(this.currentElementIndex * -100)
           } else {
            // Go to last image
            this.currentElementIndex = this.links.length-1;
            this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}vw`;
           }
           
             console.log(this.currentElementIndex);
             console.log(this.links.length-1);
        })
        return prevButton;
    }
    createLightBox() {

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

          this.links.forEach( media => {
          const container = document.createElement('div');
          container.insertAdjacentHTML('beforeend',media.outerHTML);
          imageContainer.appendChild(container)
         }) 

         lightbox.appendChild(prevButton);
         lightbox.appendChild(nextButton);
         lightbox.appendChild(closeButton);
         lightbox.appendChild(imageContainer);
         const main = document.querySelector('main');
         main.appendChild(lightbox);

         this.firstElement = document.querySelector('.imageContainer div:first-child');
         this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}vw`;

         return lightbox;
    }
}
export { lightbox };