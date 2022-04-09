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
        let all = parsedObj.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const cartWrapper = document.createElement('div');
        cartWrapper.classList.add('cart-wrapper');
        cartWrapper.innerHTML = `<div class="close" onclick="document.querySelector('.cart-wrapper').remove()">❌</div><h3>together to pay: <span id="all">${all.toFixed(2)}</span>$</h3>
    <div  class="cart-button"><a class=" btn-primary" onclick="localStorage.clear();document.querySelector('.cart-wrapper').remove();document.querySelector('#meter').innerHTML=0" href="https://www.paypal.com/pl/signin" target="_blank">Pay</a></div>`;
        for (let i = 0; i < parsedObj.length; i++) {
            const ul = document.createElement('ul');
            ul.classList.add('cart-item');
            ul.innerHTML = `
            <li id="${parsedObj[i].id}" class="list-group-item   ">
              <img src="${parsedObj[i].src}" alt="image" >
              <span >${parsedObj[i].title}</span>
              <span class="price">${parsedObj[i].price}$</span>
              <span class="qua" >${parsedObj[i].quantity} pcs</span>
              <button type="button" class=" btn-danger" >🗑️</button>    
            </li>`;
            cartWrapper.appendChild(ul);
        }
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.appendChild(cartWrapper);
    }
    const btn = document.querySelectorAll('.btn-danger');
    btn.forEach(el => {
        el.addEventListener('click', () => {
            var _a, _b;
            const id = (_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.id;
            const strt = localStorage.getItem("data");
            if (strt) {
                const dataLocalStorage = JSON.parse(strt);
                let temp = dataLocalStorage.filter((item) => item.id != id);
                localStorage.setItem("data", JSON.stringify(temp));
                lengthCart();
                (_b = el.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
                let all = temp.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const allDelte = document.querySelector('#all');
                allDelte.innerText = `${all.toFixed(2)}`;
            }
        });
    });
}
