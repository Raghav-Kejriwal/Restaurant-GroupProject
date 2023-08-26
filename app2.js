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
        name: 'Awesome American Cheesy Chicken',
        image: 'a1.png',
        price: 229 ,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        description: 'Our divine peruvian flavoured chicken pepperoni cheesy sauce, topped with classic , spicy jalapeno and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce.'
    },
    {
        id: 2,
        name: 'Nawabi Murg Makhni',
        image: 'a2.png',
        price: 259,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        description:'A chicken lovers delight ! Combination of chicken malai tikka, flavourful chicken keema masala, crunchy onion, juicy tomato on our new makhni sauce with 100% mozzarella cheese and buttery spice sprinkle.'
    },
    {
        id: 3,
        name: 'Dhabe Da Keema',
        image: 'a3.png',
        price: 239,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        description:'Dhaba style chicken keema masala, with green chiili, crunchy onion with flavourful pan sauce, 100% mozzarella cheese & a generous drizzle of mint mayo.'
    },
    {
        id: 4,
        name: 'Chicken Tikka',
        image: 'a4.png',
        price: 269,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        description:'Mouth-watering Chicken Tikka, crunchy Onion & Tomato with delicious Tandoori Sauce and 100% mozzarella cheese.'
    },
    {
        id: 5,
        name: 'Chicken Tikka Supreme',
        image: 'a5.png',
        price: 319,
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        description:'A divine combination of delicious Chicken Tikka & Malai Chicken Tikka, Onion, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese.'
    },
    {
        id: 6,
        name: 'Triple Chicken Feast',
        image: 'a6.png',
        sizes: ['Regular', 'Medium', 'Large','Regular san francisco style','Medium san francisco style','Regular stuffed cheez max','Medium stuffed cheez max','Regular stuffed chicken seekh kebab','Medium stuffed chicken seekh kebab'],
        price: 339,
        description:'Spicy Schezwan Chicken Meatball, flavourful Herbed Chicken, juicy Chicken Sausage, Green Capsicum & Onion, spicy Red Paprika with classic pan sauce and 100% mozzarella cheese.'
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
