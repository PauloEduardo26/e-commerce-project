const thumbs = document.querySelectorAll(".thumb");
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

function handleThumbs(){
    let previousElement = null;
    let previousModalThumb = null;

    thumbs.forEach((element, index) =>{
        
        element.addEventListener("click", ()=> {
            thumbs[0].classList.remove("active")
            thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index+1}.jpg`
            modalImage.src = `http://127.0.0.1:5500/images/image-product-${index+1}.jpg`

            modalNext.addEventListener("click", ()=>{
                if(index<4){
                    index++;
                    modalImage.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`
                    thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`
                }
            });

            modalPrev.addEventListener("click", ()=>{
                if(index>1){
                    index--;
                    modalImage.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`
                    thumbnail.src = `http://127.0.0.1:5500/images/image-product-${index}.jpg`
                }
            });

            if (previousElement) {
                previousElement.classList.add("not-active")
                previousModalThumb.classList.add("not-active")
            }
            
            element.classList.add("active")
            modalThumbs[index].classList.add("active")

            previousElement = element;
            previousModalThumb = modalThumbs[index];
        })
    });

    thumbnail.addEventListener("click", ()=>{
        modal.classList.add("aberto")
        fecharModal.addEventListener("click", ()=>{
            modal.classList.remove("aberto")
        });
    });

};
function handleCounter(){
    let counter = document.querySelector(".counter-text")
    
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
        let cartCount = document.querySelector(".cart-count");
        cartCount.innerHTML = counter.innerHTML
    })
   
}

handleCounter();
handleThumbs();
