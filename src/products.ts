import { lengthCart, openCart } from "./cart.js";
import {  displayCards } from "./display-cards.js";

 displayCards('/test.json',6);

 lengthCart()

 const cartMy= document.querySelector('.cart') as HTMLDivElement
   cartMy.addEventListener('click', openCart) 

  const list = document.querySelectorAll('.list') as NodeListOf<HTMLLIElement>
  list.forEach(el=>
    el.addEventListener('click',searchItems))

    function searchItems(e:any){
        e.preventDefault()
        const searchValue = e.target.innerHTML
        const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
        cards.forEach(card=>{
          if(searchValue==='All'){
            card.style.display='flex'
          }
         else{  
        if(card.dataset.company == searchValue){
            card.style.display = 'flex'
        }else{
            card.style.display = 'none'
        }
      }
      })
    }

    const inputPrice = document.querySelector('.input-price') as HTMLInputElement
    inputPrice.addEventListener('input',filterPrice)

    function filterPrice(e:any){
     const priceValue=document.querySelector('#price-value')as HTMLSpanElement
     priceValue.innerHTML=e.target.value
      
        const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
        cards.forEach(card=>{          
         if(Number(card.dataset.price) <= Number(e.target.value)){
            card.style.display='flex'
         }else{
            card.style.display='none'
         }   
        })
    }
    const inputSearch = document.querySelector('.input-search') as HTMLInputElement
    inputSearch.addEventListener('input',filterSearch)

    function filterSearch(e:any){
        const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
        cards.forEach(card=>{          
          if(card.dataset.name?.toLowerCase().includes(e.target.value.toLowerCase())){
            card.style.display='flex'
          }else{
            card.style.display='none'
          }
        })
    }