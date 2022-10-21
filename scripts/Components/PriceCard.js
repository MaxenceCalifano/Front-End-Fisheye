class price_card {
    constructor(price) {
        this._price = price;
    }
    render() {
        const priceCard = document.createElement('div');
        priceCard.className = 'priceCard';
        const priceHolder = document.createElement('p');
        priceHolder.textContent = `${this._price}€ / jour`;
        priceCard.appendChild(priceHolder);
        return priceCard;
    }
}

export { price_card }