import { lengthCart, openCart } from "./cart.js";
import { displayCards } from "./display-cards.js";
displayCards('/test.json', 6);
lengthCart();
const cartMy = document.querySelector('.cart');
cartMy.addEventListener('click', openCart);
const search = document.querySelectorAll('.list');
search.forEach(el => el.addEventListener('click', searchItems));
function searchItems(e) {
    e.preventDefault();
    const searchValue = e.target.innerHTML;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (searchValue === 'All') {
            card.style.display = 'flex';
        }
        else {
            if (card.dataset.company == searchValue) {
                card.style.display = 'flex';
            }
            else {
                card.style.display = 'none';
            }
        }
    });
}
