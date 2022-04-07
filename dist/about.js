import { lengthCart, openCart } from "./cart.js";
lengthCart();
const cartMy = document.querySelector('.cart');
cartMy.addEventListener('click', openCart);
