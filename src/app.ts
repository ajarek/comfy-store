const cards=document.querySelectorAll('.card');

cards.forEach(card=>{
    card.addEventListener('click',()=>{
        window.location.href='http://127.0.0.1:5500/html/single-card.html';
      
    });
});

async function displayThreeCards(){
    const res=await fetch('test.json')
    const data=await res.json();
    console.log(data);
    
   }
       
    displayThreeCards();
