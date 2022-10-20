//import { user } from '../Components/User'

function photographerFactory(data) {
    const { name } = data;
   
        function getUserCardDOM() {
   
            return new userCard(data).render()
        }   
     
    return { name, getUserCardDOM }
}