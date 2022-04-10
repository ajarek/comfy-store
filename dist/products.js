import { lengthCart, openCart } from "./cart.js";
import { displayCards } from "./display-cards.js";
displayCards('/test.json', 6);
lengthCart();
const cartMy = document.querySelector('.cart');
cartMy.addEventListener('click', openCart);
const list = document.querySelectorAll('.list');
list.forEach(el => el.addEventListener('click', searchItems));
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
const inputPrice = document.querySelector('.input-price');
inputPrice.addEventListener('input', filterPrice);
function filterPrice(e) {
    const priceValue = document.querySelector('#price-value');
    priceValue.innerHTML = e.target.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (Number(card.dataset.price) <= Number(e.target.value)) {
            card.style.display = 'flex';
        }
        else {
            card.style.display = 'none';
        }
    });
}
const inputSearch = document.querySelector('.input-search');
inputSearch.addEventListener('input', filterSearch);
function filterSearch(e) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        var _a;
        if ((_a = card.dataset.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = 'flex';
        }
        else {
            card.style.display = 'none';
        }
    });
}
