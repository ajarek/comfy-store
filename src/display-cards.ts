 interface Item {
     id: string;
     title: string;
     price: string;
     src: string;
     company: string;
     desc: string;
 }
 export let cartArray: Item[] = []
 export async function displayCards(url: string, length: number) {
     const grid = document.querySelector('.grid') as HTMLDivElement
     const res = await fetch(url)
     const data = [...await res.json()]

     data.forEach((el, index) => {
         if (index < length) {
             const cardElement = document.createElement('div');
             cardElement.classList.add('card');
             cardElement.innerHTML = `
        <div id="img${el.id}" class="img"  style="background:url('${el.src}'); background-size: cover;background-position: center;background-repeat: no-repeat;"></div>
        <div class="title">${el.title}</div>
        <div class="price">$<span>${el.price}</span></div>
        `
             grid.appendChild(cardElement);
         }
     })

     const img = document.querySelectorAll('.img') as NodeListOf < HTMLDivElement >
         const main = document.querySelector('main') as HTMLDivElement
     img.forEach(elem => {
         elem.addEventListener('click', (e) => {
             e.preventDefault()
             data.forEach(el => {
                 if (elem.id == `img${el.id}`) {



                     main.innerHTML = ''
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
        `
                     document.body.appendChild(container);
                 }
             })
             const btnCart = document.getElementById('btn-cart') as HTMLButtonElement
             btnCart.addEventListener('click', (e) => {
                
                 data.forEach(el => {
                     if (elem.id == `img${el.id}`) {



                         let newData: Item = {
                             id: el.id,
                             title: el.title,
                             price: el.price,
                             src: el.src,
                             company: el.company,
                             desc: el.desc
                         }
                         const localStorageData = localStorage.getItem('data')
                         let data
                         if (localStorageData === null) {
                             data = []
                         } else {
                             data = JSON.parse(localStorageData)
                         }

                         data.push(newData)
                         localStorage.setItem('data', JSON.stringify(data))
                         location.reload()
                     }

                 })


             })
         })
     })



 }
 