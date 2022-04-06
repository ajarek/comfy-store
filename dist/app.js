import { cartArray, displayCards } from "./display-cards.js";
displayCards('test.json', 3);
const cartMy = document.querySelector('.cart');
cartMy.addEventListener('click', () => {
    console.log(cartArray);
});
