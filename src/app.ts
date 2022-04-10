import { lengthCart, openCart } from "./cart.js";
import { displayCards } from "./display-cards.js"

displayCards('test.json',3);

lengthCart()
 
const cartMy= document.querySelector('.cart') as HTMLDivElement
cartMy.addEventListener('click', openCart) 
    
    