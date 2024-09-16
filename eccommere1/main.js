
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

// start when the document is ready 

if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',start);

}else{
    start();
}

//========================start============= 
function start(){
addEvents();

}

//=================update====================
function update(){
    addEvents();
    updateTotal();

}

//===================addd events==============


function addEvents(){ 
    //remove items from cart 
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach ((btn)=>(
    btn.addEventListener("click",handle_removeCartItem)
    ));
  
    // changge items quantity

    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input =>{
        input.addEventListener("change",handle_changeItemQuantity);
    })

    //add item to cart 

    let addCart_btns =document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn)=>{
        btn.addEventListener("click",handle_addCartItem);
    
    });

}

//==============handle==================
function handle_addCartItem(){

    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc =product.querySelector(".product-img").src;

    console.log(title, price, imgSrc)

    let newToAdd = {
        title,
        price,
        imgSrc,
    };
    //handle item is already exist 
    // start here

    //  add product to cart 

    let cartBoxElement = CartBoxComponent(title,price,imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");  
    cartContent.appendChild(newNode); 
    update();  

     
    
}
function handle_removeCartItem(){   

    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity(){

    if(isNaN(this.value)|| this.value<1){ 
        this.value =1;

    }
    this.value =math.floor(this.value); // to keep it integer
    update();
}


// =============update $ reference function=======

function updateTotal() {

    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;  
    cartBoxes.forEach((cartBox) => {

        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("R",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    // keep 2 digits after the decimal point
    total =total.toFixed(2);
    totalElement.innerHTML = "R" + total; 

} 

//======== update & reference function ===========
function CartBoxComponent(title,price,imgSrc){


             return`
                        <div class="cart-box">
                        <img src=${imgSrc}alt=""class="cart-img">
                        <div clas="detail-box">
                            <div class="cart-product-title">${title} </div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>

                        <!--remove cart-->
                        <i class ="bx bxs-trash-alt cart-remove"></i>
                    </div>`;
}