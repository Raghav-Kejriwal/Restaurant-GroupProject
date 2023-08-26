// Add this at the beginning of your app2.js
document.getElementById('slider').addEventListener('change', function () {
    if (this.checked) {
        // Load non-veg tab
        window.location.href = 'index10.html';
    } else {
        // Load veg tab
        window.location.href = 'index11.html';
    }
});

let docTitle=document.title;
window.addEventListener("blur",()=>{
    document.title="COME BACK🫠🫠";
});

window.addEventListener("focus",()=>{
    document.title=docTitle;
})

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'CRUNCHY TACO',
        image: 't1.jpeg',
        price: 189 ,
        sizes: ['Regular'],
        description: 'Its crunchy. Its delicious! Our signature product served with pinto beans & zesty ranch sauce.'
    },
    {
        id: 2,
        name: 'SOFT TACO',
        image: 't2.jpeg',
        price: 219,
        sizes: ['Regular'],
        description:'The Soft Taco has a warm, flour tortilla. Soft, of course! Served with our chef recommended Mexican Paneer & Spicy Ranch Sauce. You may opt to choose & swap with other veg protein too.'
    },
    {
        id: 3,
        name: 'CHEESE STUFF TACO',
        image: 't3.jpeg',
        price: 219,
        sizes: ['Regular'],
        description:'Crispy Flaky Shell stuffed with cheese. It has a layer of Fajita Veg along with hot & cold fillings with Taco Bellâ€™s signature sauces inside.'
    },
    {
        id: 4,
        name: 'CHEESE STUFF TACO COMBO',
        image: 't4.jpeg',
        price: 239,
        sizes: ['Regular'],
        description:'Meal Includes 1 Ultimate Cheese Taco, 1 Side of choice and 1 beverage of choice'
    },
    {
        id: 5,
        name: 'CRISPY CHALUPA TACO',
        image: 't5.jpeg',
        price: 259,
        sizes: ['Regular'],
        description:'Crunchy? Chewy? Both. A crunchy and chewy flatbread filled with Mexican paneer, creamy jalapeno sauce, crisp shredded lettuce, a two-blend cheese and diced ripe tomatoes.'
    },
    {
        id: 6,
        name: 'TWO TACO MEAL',
        image: 't6.jpeg',
        sizes: ['Regular'],
        price: 279,
        description:'Meal includes one soft taco bean, one Crunchy Taco Mexican Paneer, one side of choice and one beverage of choice (Served by pet bottle)'
    },
    {
        id:7,
        name:'Pepsi',
        image:'x12.png',
        sizes:['Regular','Medium', 'Large'],
        price:30
    },
    {
        id:8,
        name:'Pepsi Black',
        image:'x11.png',
        sizes:['Regular','Medium', 'Large'],
        price:30
    },
    {
        id:9,
        name:'Mirinda',
        image:'x10.png',
        sizes:['Regular','Medium', 'Large'],
        price:30
    },
    {
        id:10,
        name:'7-UP',
        image:'x9.png',
        sizes:['Regular','Medium', 'Large'],
        price:30
    },
    {
        id:11,
        name:'Water Bottle',
        image:'x8.png',
        sizes:['Regular','Medium', 'Large'],
        price:18
    },
    {
        id:12,
        name:'Brow-WOW-nie',
        image:'x7.png',
        sizes:['Regular'],
        price:69
    },
    {
        id:13,
        name:'Cornetto Double Chocolate',
        image:'x6.png',
        sizes:['Regular'],
        price:35
    },
    {
        id:14,
        name:'Choco-Volcano',
        image:'x5.png',
        sizes:['Regular'],
        price:69
    },
    {
        id:15,
        name:'Choco-Sundae',
        image:'x4.png',
        sizes:['Regular'],
        price:30
    },
    {
        id:16,
        name:'Desi Kulfi Cup',
        image:'x3.png',
        sizes:['Regular'],
        price:69
    },
    {
        id:17,
        name:'Oreo tub',
        image:'x2.png',
        sizes:['Regular'],
        price:169
    },
    {
        id:18,
        name:'Cheese Garlic Bread',
        image:'x1.png',
        sizes:['Regular'],
        price:89
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.description}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <select id="size${key}" onchange="updatePrice(${key})">
                ${value.sizes.map((size) => `<option value="${size}">${size}</option>`).join('')}
            </select>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    const selectedSizeElement = document.getElementById(`size${key}`);
    const selectedSize = selectedSizeElement.value;
    
    const existingItem = listCards.find((item) => item.id === products[key].id && item.size === selectedSize);

    if (existingItem) {
        existingItem.quantity++;
        existingItem.price = existingItem.quantity * products[key].price * getMultiplier(selectedSize);
    } else {
        // If the selected pizza is not in the listCards array, add it as a new item
        const newItem = JSON.parse(JSON.stringify(products[key]));
        newItem.quantity = 1;
        newItem.size = selectedSize;
        newItem.price = products[key].price * getMultiplier(selectedSize);
        listCards.push(newItem);
    }

    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].size = selectedSize;
        listCards[key].price = products[key].price * getMultiplier(selectedSize);
    }
    reloadCard();
}
function updatePrice(key) {
    const selectedSizeElement = document.getElementById(`size${key}`);
    const selectedSize = selectedSizeElement.value;

    const product = products[key];
    const selectedPrice = product.price * getMultiplier(selectedSize);

    const priceElement = document.getElementById(`price${key}`);
    priceElement.textContent = selectedPrice.toLocaleString();
}
function getMultiplier(size) {
    switch (size) {
        case 'Regular':
            return 1;
        case 'Medium':
            return 1.6; 
        case 'Large':
            return 2.3; 
        case 'Regular san francisco style':
            return 1.5;
        case 'Medium san francisco style':
            return 1.9;    
        case 'Regular stuffed cheez max':   
            return 1.95;
        case 'Medium stuffed cheez max': 
            return 2.6; 
        case 'Regular stuffed chicken seekh kebab':
            return 1.8;
        case 'Medium stuffed chicken seekh kebab':
            return 3;              
        default:
            return 1;
    }
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>Size: ${value.size}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
            totalPrice += value.price;
            count += value.quantity;
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
