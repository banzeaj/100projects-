const product = [

{
    id :1,
    image: 'image//aa-1.jpg',
    title:'headphones',
    price: 'R20',
}

{
    id :1,
    image: 'image//aa-1.jpg',
    title:'headphones',
    price: 'R20',
},

{
    id :2,
    image: 'image//bb-1.jpg',
    title:'Rode NT1 Microphone', 
    price: 'R45',
},

{
    id :3,
    image: 'image//cc-1.jpg',
    title:'smart watch',
    price: 'R20',
},

{
    id :4,
    image: 'image//dd-1.jpg',
    title:'Hp laptop ',
    price: 'R2000',
},
{
    id :5,
    image: 'image//ee-1.jpg',
    title:'camera',
    price: 'R40',
},
{
    id :6,
    image: 'image//ff-1.jpg',
    title:'metal desk lamp',
    price: 'R59',
},
{
    id :7,
    image: 'image//gg-1.jpg',
    title:'cell phone',
    price: 'R100',
},
{
    id :8,
    image: 'image//hh-1.jpg',
    title:'pods pro',
    price: 'R20',
},

]

const categories = [...new Set(product.map((item)=>
{return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item))=>
{
   var {image,title,price}= item;
   return{
    `<div class="box">
    <div class="img-box">
    </div>
    <div cl
    </div>`
   }
}