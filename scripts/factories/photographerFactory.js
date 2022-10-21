import { userCard } from '../Components/UserCard.js';

function photographerFactory(data) {
    const { name } = data;
   
        function getUserCardDOM() {
   
            return new userCard(data).render()
        }   
     
    return { name, getUserCardDOM }
}

export { photographerFactory }