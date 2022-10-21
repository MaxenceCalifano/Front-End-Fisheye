import { userCard } from '../Components/UserCard.js';


class photographerFactory {
    constructor(data) {
        this._data = data;

        const { name } = data;
        return new userCard(data).render()
    }
}

export { photographerFactory }