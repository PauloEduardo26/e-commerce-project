let thumbs = document.querySelectorAll(".thumb")
let thumbnail = document.querySelector(".thumbnail");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar");
const modalImage = document.querySelector(".conteudo-modal");
const modalThumbs = document.querySelectorAll(".modal-thumb");
const modalPrev = document.querySelector(".prev");
const modalNext = document.querySelector(".next");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const addToCart = document.querySelector(".add-to-cart");
let cartCount = document.querySelector(".cart-count");
let counter = document.querySelector(".counter-text");
const mobileNext = document.querySelector(".mobile-next");
const mobilePrev = document.querySelector(".mobile-prev");
const menu = document.querySelector(".menu");
const fechar = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const options = document.querySelector(".options");

function handleThumbs(){
    let previousElement = 1;
    thumbs.forEach((element, index) =>{
        element.addEventListener("click", ()=> {
            thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`;
            modalImage.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`;
            thumbs[previousElement].classList.remove("active");
            element.classList.add("active");
            modalThumbs[previousElement].classList.remove("active");
            modalThumbs[index].classList.add("active");
            previousElement=index
        })
    })
    modalNext.addEventListener("click", function(){    
        if(previousElement<=3){
            previousElement++;
            thumbnail.src = `http://127.0.0.1:5500/images/image-product-${previousElement}.jpg`;
            modalImage.src = `http://127.0.0.1:5500/images/image-product-${previousElement}.jpg`;
            thumbs[previousElement-1].classList.remove("active");
            thumbs[previousElement].classList.add("active");
            modalThumbs[previousElement].classList.add("active");
            modalThumbs[previousElement-1].classList.remove("active");
        } 
    })
    modalPrev.addEventListener("click", function(){
        if(previousElement>1){
            previousElement--;
            thumbnail.src = `http://127.0.0.1:5500/images/image-product-${previousElement}.jpg`;
            modalImage.src = `http://127.0.0.1:5500/images/image-product-${previousElement}.jpg`;
            thumbs[previousElement+1].classList.remove("active");
            thumbs[previousElement].classList.add("active");
            modalThumbs[previousElement].classList.add("active");
            modalThumbs[previousElement+1].classList.remove("active");
        }
    })
};

function handleCloseModal(){
    if (window.innerWidth > 680) {
        thumbnail.addEventListener("click", ()=>{
            modal.classList.add("aberto")
            fecharModal.addEventListener("click", ()=>{
                modal.classList.remove("aberto")
            });
        });
    } 
}

function mobileThumb(){
    if (window.innerWidth < 681) {
        let index=1;
        mobileNext.addEventListener("click", (e)=>{
            e.preventDefault()
            if(index<4){
                index++;
                thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`;
            }
        })
        mobilePrev.addEventListener("click", (e)=>{
            e.preventDefault()
            if(index>1){
                index--;
                thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`;
            }
        })
    }
}

function handleCounter(){
    plusButton.addEventListener("click", (event)=>{
        event.preventDefault();
        counter.innerHTML++;
    })
    minusButton.addEventListener("click", (event)=>{
        event.preventDefault();
        if(counter.innerHTML>0)counter.innerHTML--;
    })
    addToCart.addEventListener("click", (event)=>{
        event.preventDefault();
        cartCount.innerHTML = counter.innerHTML
    })
}

function handleMenu(){
    menu.addEventListener("click", (e)=>{
        options.classList.add("hidden")
        overlay.classList.add('hidden') 
    })
    fechar.addEventListener("click", ()=>{
        options.classList.remove("hidden")
        overlay.classList.remove('hidden')
    })    
}
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-wrp")
const cartC = document.querySelector(".cart-content")

cart.addEventListener('click', () => {
    cartContainer.classList.toggle("invisible")  
    const amountValue = cartCount.innerHTML;
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
    cartC.classList.remove("empty");
    cartC.innerHTML = `<div class="product-cart">
                    <div class='product-cart-inside'>
                      <img src="./images/image-product-1-thumbnail.jpg" class="thumb" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> × <span class="number">${amountValue}</span> </p>
                        <b>$${total}</b>
                      </div>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
  }

})


handleMenu();
handleCloseModal();
mobileThumb();
handleCounter();
handleThumbs();
