const cards = document.querySelectorAll('.card');
let titleCount = 1;
let totalPrice = 0;
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click', function(){
        // Access Price and title
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + title + ' $' + price ; 
        titleContainer.appendChild(p);
        titleCount++;
        // Count total Price 
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice;
        
        let total = totalPrice;
        document.getElementById('total').innerText = total;
        apply();
    })
}




function apply(){
    const inputFieldValue = document.getElementById('input-field').value;
    let discount = 0;
    let total = 0;
    const totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
    if(inputFieldValue === 'SELL200'){
      if(totalPrice >=200){
         discount = totalPrice * 20/100;
         document.getElementById('discountPrice').innerText = discount;
         total = totalPrice - discount;
         document.getElementById('total').innerText = total;
     } else{
         total = totalPrice;
         document.getElementById('total').innerText = total;
     }
 } else {
     total = totalPrice;
 document.getElementById('total').innerText = total;
 }
 }
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', apply)