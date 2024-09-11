
// open and close cart 

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart =  document.querySelector("#cart-close");

cartIcon.addEventListener("click",()=>{
    cart.classList.add("active");
});

closeCart.addEventListener("click",()=>{
    cart.classList.remove("active");
});

alert("check the code again ")