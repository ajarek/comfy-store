export function lengthCart() {
    const meter = document.querySelector('#meter');
    const str = localStorage.getItem("data");
    if (str) {
        const parsedObj = JSON.parse(str);
        meter.innerText = parsedObj.length;
    }
}
export function openCart() {
    var _a;
    const str = localStorage.getItem("data");
    if (str) {
        const parsedObj = JSON.parse(str);
        const ales = parsedObj.reduce((acc, item) => acc + item.price, 0);
        const cartWrapper = document.createElement('div');
        cartWrapper.classList.add('cart-wrapper');
        cartWrapper.innerHTML = `<div class="close" onclick="document.querySelector('.cart-wrapper').remove()">❌</div><h3>together to pay: <span>${ales}</span>$</h3>
    <div  class="cart-button"><a class=" btn-primary" onclick="localStorage.clear();document.querySelector('.cart-wrapper').remove();document.querySelector('#meter').innerHTML=0" href="https://www.paypal.com/pl/signin" target="_blank">Pay</a></div>`;
        for (let i = 0; i < parsedObj.length; i++) {
            const ul = document.createElement('ul');
            ul.classList.add('cart-item');
            ul.innerHTML = `
            <li class="list-group-item   ">
            <img src="${parsedObj[i].src}" alt="image" >
              <span >${parsedObj[i].title}</span>
              <span class="price" >${parsedObj[i].price}</span>
              
                <button type="button" class=" btn-danger" onclick='deleteUrl()'>🗑️</button>
              
            </li>`;
            cartWrapper.appendChild(ul);
        }
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.appendChild(cartWrapper);
    }
}
