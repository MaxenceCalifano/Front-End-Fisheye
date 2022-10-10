function photographerFactory(data, type) {
    const { name, portrait, city, country, tagline, price, id } = data;
    //console.log('data ', data)
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    if(type === "homePage") {
        function getUserCardDOM() {
            
                const article = document.createElement( 'article' );
        
                const h2AndImage = document.createElement('a');
                h2AndImage.setAttribute("href", `photographer.html?id=${id}`)
                h2AndImage.setAttribute("aria-label", name)
        
                const userImg = new user(picture).createUserImg();
        
                const h2 = document.createElement( 'h2' );
                h2.textContent = name;
        
                const p = document.createElement("p");
                p.textContent = `${city}, ${country}`;
        
                const taglineText = document.createElement("p");
                taglineText.textContent = tagline;
        
                const priceText = document.createElement("p");
                priceText.textContent = `${price}€/jour`
                article.appendChild(h2AndImage);
                h2AndImage.appendChild(userImg);
                h2AndImage.appendChild(h2);
                article.appendChild(p);
                article.appendChild(taglineText);
                article.appendChild(priceText);
                return (article);
            } 
        }   else if(type === 'photographerPage') {
                function getPhotographerPage() {
                    const photographer_profile = new photographerProfile(data).createPhotographerProfile();
                    const userImg = new user(picture).createUserImg();
                    const button = new contact_button().createButton();
                
                return [photographer_profile, userImg, button]
            }
        }     
     
    return { name, picture, getUserCardDOM, getPhotographerPage }
}