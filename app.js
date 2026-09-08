// GET, POST, PUT/PATCH, DELETE

// 1. get data from 'https://restaurantapi.stepacademy.ge/api/products
// 2. get on the screen with separate function which will get array from api and return html string with data

const API_KEY = '13e8bfec-03fb-42f6-9b95-6a148dda8a25'; // put your Step Academy API key here
const API_URL = 'https://restaurantapi.stepacademy.ge/api/products';

async function getProducts() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'x-api-key': API_KEY
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const resp_obj = await response.json();

        renderProducts(resp_obj.data.products);
    } catch (error) {
        console.error('Failed to load products:', error);
        document.getElementById('products').innerHTML = `<p class="error">Failed to load products. Please try again later.</p>`;
    }
}



function renderProducts(products) {
    const html = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ₾</p>
        </div>
    `).join('');

    document.getElementById('products').innerHTML = html;
}

getProducts();

// POST
// PUT/PATCH
// DELETE



// 1. min 4 page
// 2. burger menu
// 3. dark-light theme 
// 4. API - GET, POST, PUT, DELETE
// register, contact, dashaboard
// 5. project link 