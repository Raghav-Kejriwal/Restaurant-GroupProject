// Add this at the beginning of your app.js
document.getElementById('slider').addEventListener('change', function () {
    if (this.checked) {
        // Load non-veg tab
        window.location.href = 'index11.html';
    } else {
        // Load veg tab
        window.location.href = 'index10.html';
    }
});

let docTitle=document.title;
window.addEventListener("blur",()=>{
    document.title="FOODIE🫠🫠";
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
        name: 'Awesome American Cheesy',
        image: 'american.png',
        price: 189 ,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        description: 'Our divine Peruvian-flavored cheesy sauce, topped with sweet corn, green capsicum, red paprika, and 100% mozzarella cheese, finished with a generous drizzle of Texas garlic sauce.'
    },
    {
        id: 2,
        name: 'Mazedar Makhni Paneer',
        image: 'makhni.png',
        price: 219,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        description:'A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle.'
    },
    {
        id: 3,
        name: 'Schezwan Margherita',
        image: 'schezwan.png',
        price: 219,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        description:'Your very own margherita, now with a spicy twist! Loaded with our signature spicy Schezwan sauce and 100% mozarella cheese.'
    },
    {
        id: 4,
        name: 'Mexican Fiesta',
        image: 'mexican.png',
        price: 239,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        description:'An ultimate combination of your favourite veggies- onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.'
    },
    {
        id: 5,
        name: 'Ultimate Tandoori Veggie',
        image: 'tndoori.png',
        price: 259,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        description:'Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.'
    },
    {
        id: 6,
        name: 'Cheezy Mushroom Magic',
        image: 'mush.png',
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max'],
        price: 279,
        description:'A new combination with creamy mushroom sauce, chunky black olives, spicy jalapeno, juicy sweet corn, mushroom and 100% mozzarella cheese with garlic sprinkle for extra flavour hit.'
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


