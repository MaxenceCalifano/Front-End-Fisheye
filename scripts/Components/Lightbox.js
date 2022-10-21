class lightbox {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.thumbs_gallery a figure > :first-child'));
        this.currentElement = "";
    }

    getLinks() {
        this.links.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this.currentElement = element;
                this.createLightBox(element);
            })  
        } );
        //return this.links;
    }

    next() {
        //Next
        const nextButton = document.createElement('button');
        nextButton.textContent = "Suivant";
        nextButton.setAttribute('class', 'nextButton');
        nextButton.addEventListener('click', () => {
         if(this.links.indexOf(this.currentElement) === this.links.length - 1) {
           this.currentElement = this.links[0]
         } else {
           this.currentElement = this.links[this.links.indexOf(this.currentElement) +1]
         }
           console.log(this.currentElement);
          /*  img.setAttribute('src', element.src);
           img.setAttribute('alt', element.alt); */
           
        })
        return nextButton;
    }
    prev() {
        const prevButton = document.createElement('button');
        prevButton.setAttribute('class', 'prevButton');
        prevButton.textContent = "Précedent";
        prevButton.addEventListener('click', () => {
           if(this.links.indexOf(this.currentElement) === 0) {
               this.currentElement = this.links[this.links.length - 1]
             } else {
               this.currentElement = this.links[this.links.indexOf(this.currentElement) -1]
             }
           console.log(this.links.indexOf(element));
           img.setAttribute('src', this.currentElement.src);
           img.setAttribute('alt', this.currentElement.alt);
        })
        return prevButton;
    }
    createLightBox(element) {
        console.log(this.links.indexOf(element)) // Donne l'index de l'image
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
         const img = document.createElement('img');
         img.setAttribute('src', element.src);
         img.setAttribute('alt', element.alt);

         //imageContainer.innerHTML = `${this.currentElement}`
         imageContainer.appendChild(img);
 
         lightbox.appendChild(prevButton);
         lightbox.appendChild(nextButton);
         lightbox.appendChild(closeButton);
         lightbox.appendChild(imageContainer);
         document.body.appendChild(lightbox)
        // return lightbox;
    }

    render() {
       this.getLinks();
    }
}
export { lightbox };