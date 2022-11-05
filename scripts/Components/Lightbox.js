class lightbox {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.thumbs_gallery a figure > :first-child'));
        this.currentElementIndex;
       
        this.firstElement;

        this.links.forEach((element) => {
           element.parentElement.parentElement.addEventListener('click', (event) => {
            this.open(element, event)
          }) 
          
      });

    }
    open(element, event) {
     // element.addEventListener('click', (event) => {
        event.preventDefault();
        this.currentElementIndex = this.links.indexOf(element);
        this.lightbox = this.createLightBox();
 //   })  
    }

    next() {
      if(this.currentElementIndex < this.links.length-1) {
        this.currentElementIndex++;
        this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}%`;
       } else {
        this.currentElementIndex = 0;
        this.firstElement.style.marginLeft = 0;
       }
    }
    prev() {
      if(this.currentElementIndex > 0) {
        this.currentElementIndex--;
        this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}%`;
       
       } else {
        // Go to last image
        this.currentElementIndex = this.links.length-1;
        this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}%`;
       }
    } 

    close(lightbox) {
      lightbox.remove();
      console.log('test2')
      document.removeEventListener('keydown', this.close)
    }
    
    nextButton() {
        //Next
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.setAttribute('class', 'nextButton');
        nextButton.addEventListener('click', () => this.next())
        return nextButton;
    }
    prevButton() {
        const prevButton = document.createElement('button');
        prevButton.setAttribute('class', 'prevButton');
        prevButton.textContent = "Précedent";
        prevButton.addEventListener('click', () => this.prev())
        return prevButton;
    }
    createLightBox() {

         // BUTTONS

         const lightbox = document.createElement('div');
         lightbox.classList.add("lightbox");
         lightbox.setAttribute('role', 'dialog');

        document.body.setAttribute("aria-hidden", true);
        lightbox.setAttribute("aria-hidden", false);

         
         const nextButton = this.nextButton();
         const prevButton = this.prevButton();
        
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
         const containerBorder = document.createElement('div');
         containerBorder.setAttribute('class', 'containerBorder');
         containerBorder.appendChild(imageContainer);
         lightbox.appendChild(containerBorder);
         const main = document.querySelector('main');
         main.appendChild(lightbox);

         this.firstElement = document.querySelector('.imageContainer div:first-child');
         this.firstElement.style.marginLeft = `${this.currentElementIndex * -100}%`;

         closeButton.focus();

         const keyBoardEvent = (e) => {
          if(e.key === "ArrowLeft") {
            this.prev();
          } else if (e.key === "ArrowRight") {
            this.next()
          } else if (e.key === "Escape") {
            document.removeEventListener('keydown', keyBoardEvent)
            lightbox.remove()
          }
        }

         document.addEventListener('keydown', (e) => keyBoardEvent(e))

         return lightbox;
    }
}
export { lightbox };