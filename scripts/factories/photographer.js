function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    console.log('data ', data)
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const h2AndImage = document.createElement('a');
        h2AndImage.setAttribute("href", "photographer.html")

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("aria-label", name)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const p = document.createElement("p");
        p.textContent = `${city}, ${country}`;

        const taglineText = document.createElement("p");
        taglineText.textContent = tagline;

        const priceText = document.createElement("p");
        priceText.textContent = `${price}€/jour`
        article.appendChild(h2AndImage);
        h2AndImage.appendChild(img);
        h2AndImage.appendChild(h2);
        article.appendChild(p);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}