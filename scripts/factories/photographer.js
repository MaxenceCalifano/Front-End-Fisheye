function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    console.log('data ', data)
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "portrait du photographe")

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const p = document.createElement("p");
        p.textContent = `${city}, ${country}`;

        const taglineText = document.createElement("p");
        taglineText.textContent = tagline;

        const priceText = document.createElement("p");
        priceText.textContent = `${price}€/jour`

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}