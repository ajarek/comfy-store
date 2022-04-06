import { cartArray, displayCards } from "./display-cards.js";

 displayCards('/test.json',6);

 const cartMy= document.querySelector('.cart') as HTMLDivElement
 cartMy.addEventListener('click', () => {
 console.log(cartArray)
 })