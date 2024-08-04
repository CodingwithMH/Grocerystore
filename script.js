let increasingbtn = document.querySelectorAll('.inc')
let decreasingbtn = document.querySelectorAll('.dec')
let number = document.querySelectorAll('.number')
let scroll = document.querySelector('.scroll')
let previous = document.querySelector('.prev')
let next = document.querySelector('.next')
let firstlistitems = document.querySelectorAll('.itemlist')
let shopIcon = document.querySelector('.shopicon')
let cart = document.querySelector('.cart')
let cartitems = document.querySelector('.cartitems')
let backarrow = document.querySelector('.backarrow')
let subtotal = document.querySelector('.subtotalp')
let addtocart = document.querySelectorAll('.addtocart')
let addtocartp = document.querySelectorAll('.addtocartp')
let imageslist = document.querySelectorAll('#itmlst')
let productname = document.querySelectorAll('.productname')
let newold = document.querySelectorAll('.newold')
let newvalue = document.querySelectorAll('.new')
let oldvalue = document.querySelectorAll('.old')
let tick = document.querySelectorAll('.tick')
//increase or decrease the number of items
for (let i = 0; i < number.length; i++) {
    let a = 1;
    increasingbtn[i].addEventListener('click', () => {
        a++;
        number[i].innerHTML = a;
    })
    decreasingbtn[i].addEventListener('click', () => {

        if (a > 1) {
            a--;
            number[i].innerHTML = a;
        }

    })
}
//Move the items from left to right/right to left on click
let b = 1;
previous.addEventListener('click', () => {
    if (b >= 1) {
        scroll.style.transform = 'translateX(-' + (b - 2) * 23 + '%)';
        b--;
    }
})
next.addEventListener('click', () => {
    if (b <= firstlistitems.length - 4) {
        scroll.style.transform = 'translateX(-' + b * 23 + '%)';
        b++;
    }
})
//slide side bar from right side
shopIcon.addEventListener('click', () => {
    if (cart.style.width = '0') {
        cart.style.width = '250px';
    }
})
backarrow.addEventListener('click', () => {
    if (cart.style.width = '250px') {
        cart.style.width = '0px';
    }
})
// to add item in the cart
let subttl=0;
function AddItemtoCart(imageurl, name, price, quantity) {
    
        cardtitemhtml = `<div class="cartitem" style="margin-top: 10px;height: 90px;display: flex;gap: 10px;align-content: center;position: relative;"><img ${imageurl} height="80px" width="80px"  alt=""><div><div class="cartiteminf">${name}</div><div class="cartiteminf">${price}</div><div class="cartiteminf">${quantity}</div></div></div><hr style="width: 150px;margin: auto;">`
    cartitems.innerHTML += cardtitemhtml;
    let x=parseFloat(price) * parseFloat(quantity);
    
    subttl+=x;
    subtotal.innerHTML=subttl+' $';
}

for (let i = 0; i < addtocart.length; i++) {
    addtocart[i].addEventListener('click', () => {
        let startingindex = imageslist[i].innerHTML.toString().indexOf('src');
        let endingindex = imageslist[i].innerHTML.toString().indexOf('alt');
        let imageurl = imageslist[i].innerHTML.toString().slice(startingindex, endingindex);
        let newoldvalues = newold[i].innerHTML.toString();
        AddItemtoCart(imageurl, productname[i].innerHTML.toString(), newoldvalues.includes('class="new"') ? newvalue[i].innerHTML : oldvalue.innerHTML, number[i].innerHTML)
        addtocartp[i].style.display='none'
        tick[i].style.display='block'
        setTimeout(() => {
            addtocartp[i].style.display='block'
        tick[i].style.display='none'
        }, 2000);
    })
}




