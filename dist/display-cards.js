var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export let cartArray = [];
export function displayCards(url, length) {
    return __awaiter(this, void 0, void 0, function* () {
        const grid = document.querySelector('.grid');
        const res = yield fetch(url);
        const data = [...yield res.json()];
        data.forEach((el, index) => {
            if (index < length) {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
        <div id="img${el.id}" class="img"  style="background:url('${el.src}'); background-size: cover;background-position: center;background-repeat: no-repeat;"></div>
        <div class="title">${el.title}</div>
        <div class="price">$<span>${el.price}</span></div>
        `;
                grid.appendChild(cardElement);
            }
        });
        const img = document.querySelectorAll('.img');
        const main = document.querySelector('main');
        img.forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                data.forEach(el => {
                    if (elem.id == `img${el.id}`) {
                        main.innerHTML = '';
                        const container = document.createElement('div');
                        container.innerHTML = ` 
       <main>
           <div class="h3">
               <h3>Home / Single Product</h3>
           </div>
           <div class="single-product">
               <div class="img-single "><img src="${el.src}" alt=""></div>
               <div class="text-single">
                   <h2>${el.title}</h2>
                   <p class="company">${el.company}</p>
                   <p class="price-single">$<span>${el.price}</span></p>
                   <p class="color">⚫🟤</p>
                   <p>${el.desc}</p>
                   <button id="btn-cart">Add To Cart</button>
               </div>
           </div>
       </main>
        `;
                        document.body.appendChild(container);
                    }
                });
                const btnCart = document.getElementById('btn-cart');
                btnCart.addEventListener('click', (e) => {
                    e.preventDefault();
                    data.forEach(el => {
                        if (elem.id == `img${el.id}`) {
                            let item = {
                                id: el.id,
                                title: el.title,
                                price: el.price,
                                src: el.src,
                                company: el.company,
                                desc: el.desc
                            };
                            cartArray.push(item);
                            const meter = document.querySelector('#meter');
                            let start = Number(meter.innerHTML);
                            meter.innerHTML = `${start + 1}`;
                        }
                    });
                });
            });
        });
    });
}
