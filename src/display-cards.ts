export async function displayCards(url:string , length:number){
    const grid=document.querySelector('.grid') as HTMLDivElement
    const res=await fetch(url)
    const data=[... await res.json()]
    data.forEach((el,index)=>{
        if(index<length){
        const cardElement=document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML=`
        <div id="img${el.id}" class="img"  style="background:url('${el.src}'); background-size: cover;background-position: center;background-repeat: no-repeat;"></div>
        <div class="title">${el.title}</div>
        <div class="price">$<span>${el.price}</span></div>
        `
        grid.appendChild(cardElement);
        }
    })
   
   }
  
