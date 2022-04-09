export function lengthCart(){
    const meter = document.querySelector('#meter') as HTMLDivElement
    const str = localStorage.getItem("data")
    if(str){
        const parsedObj = JSON.parse(str);
        meter.innerText = parsedObj.length
    }
}

export function openCart(){
    const  str = localStorage.getItem("data")
      if(str){
    const parsedObj = JSON.parse(str);
    let all=parsedObj.reduce((acc:any,item:any)=>acc+item.price*item.quantity,0)
    const cartWrapper=document.createElement('div')
    cartWrapper.classList.add('cart-wrapper')
    cartWrapper.innerHTML=`<div class="close" onclick="document.querySelector('.cart-wrapper').remove()">❌</div><h3>together to pay: <span id="all">${all.toFixed(2)}</span>$</h3>
    <div  class="cart-button"><a class=" btn-primary" onclick="localStorage.clear();document.querySelector('.cart-wrapper').remove();document.querySelector('#meter').innerHTML=0" href="https://www.paypal.com/pl/signin" target="_blank">Pay</a></div>`
    for (let i = 0; i <parsedObj.length; i++) {
        const ul = document.createElement('ul')
        ul.classList.add('cart-item')
        ul.innerHTML = `
            <li id="${parsedObj[i].id}" class="list-group-item   ">
              <img src="${parsedObj[i].src}" alt="image" >
              <span >${parsedObj[i].title}</span>
              <span class="price">${parsedObj[i].price}$</span>
              <span class="qua" >${parsedObj[i].quantity} pcs</span>
              <button type="button" class=" btn-danger" >🗑️</button>    
            </li>`          
            cartWrapper.appendChild(ul)       
      }
      document.querySelector('body')?.appendChild(cartWrapper)    
  }

  const btn =document.querySelectorAll('.btn-danger') as NodeListOf<HTMLButtonElement>
    btn.forEach(el=>{

      
        el.addEventListener('click',()=>{
            const id = el.parentElement?.id
           const  strt = localStorage.getItem("data")
           if(strt){
           const dataLocalStorage = JSON.parse(strt);
           let temp= dataLocalStorage.filter((item:any)=>item.id != id )        
           localStorage.setItem("data",JSON.stringify(temp))
           lengthCart()
           el.parentElement?.remove()
           let all=temp.reduce((acc:any,item:any)=>acc+item.price*item.quantity,0)
           const allDelte= document.querySelector('#all') as HTMLSpanElement
           allDelte.innerText=`${all.toFixed(2)}`          
           }  
          
})
})
}



