
let allProducts = [];
let cart = [];

// 1. API INTEGRATION & DATA HANDLING - .then() METHOD
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())           
        .then(products => {                          
            allProducts = products;                  
            document.getElementById('loading').style.display = 'none';
            renderProducts(allProducts);             
        })
        .catch(error => {                            
            console.error('API Error:', error);
            document.getElementById('products').innerHTML = 
                '<p style="text-align:center;color:#ff4444;font-size:1.2em;">Failed to load products. Please check your connection.</p>';
        });
}


// 2-4. PRODUCT CARD GENERATION & ENHANCED DISPLAY
function renderProducts(productsToShow) {
    const container = document.getElementById('products');
    
    // CLEAR PREVIOUS CONTENT using innerHTML
    container.innerHTML = '';
    
    // HANDLE EMPTY STATE using document.createElement()
    if (productsToShow.length === 0) {
        const noProductsMsg = document.createElement('p');
        noProductsMsg.textContent = 'No products found';
        noProductsMsg.style.cssText = 'text-align:center;color:#ccc;font-size:1.1em;padding:50px;width:100%;';
        container.appendChild(noProductsMsg);  // DOM Insertion ✓
        return;
    }
    
    // LOOP THROUGH PRODUCTS & CREATE ELEMENTS
    productsToShow.forEach(product => {
        // DYNAMICALLY CREATE PRODUCT CARD using document.createElement()
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.onerror = () => { img.src = 'https://via.placeholder.com/280x180/eee/999?text=No+Image'; };
        
        
        const title = document.createElement('h3');
        title.className = 'product-title';
        title.textContent = product.title;
        
        // CATEGORY ✓
        const category = document.createElement('div');
        category.className = 'category';
        category.textContent = product.category;
        
        // PRICE ✓
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = `${product.price+"$"}`;
        
        // RATING ✓
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating';
        const stars = '★'.repeat(Math.floor(product.rating?.rate || 0));
        ratingContainer.innerHTML = `${stars} ${product.rating?.rate || 0}`;
        
        // DESCRIPTION ✓
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = product.description.substring(0, 70) + '...';
        
        // ADD TO CART BUTTON ✓
        const addButton = document.createElement('button');
        addButton.className = 'add-to-cart';
        addButton.dataset.id = product.id;
        addButton.textContent = ' Add to Cart';
        
        // APPEND ALL ELEMENTS TO CARD using appendChild()
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(category);
        productCard.appendChild(price);
        productCard.appendChild(ratingContainer);
        productCard.appendChild(description);
        productCard.appendChild(addButton);
        
        // INSERT PRODUCT CARD INTO PAGE using appendChild()
        container.appendChild(productCard);
    });
    
    // ADD EVENT LISTENERS using addEventListener()
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
}


function createProductCard(product) {
    const ratingStars = '★'.repeat(Math.floor(product.rating?.rate || 0));
    const ratingValue = product.rating?.rate || 0;
    
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" 
                 onerror="this.src='https://via.placeholder.com/280x180/eee/999?text=No+Image'">
            <h3 class="product-title">${product.title}</h3>
            <div class="category">${product.category}</div>
            <div class="price">$${product.price.toFixed(2)}</div>
            <div class="rating">${ratingStars} ${ratingValue}</div>
            <p class="description">${product.description.substring(0, 50)}...</p>
            <button class="add-to-cart" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
}

// 5. SHOPPING CART SYSTEM
function handleAddToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = allProducts.find(p => p.id === productId);

    // PREVENT DUPLICATES using find()
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // INCREASE QUANTITY
        existingItem.quantity += 1;
    } else {
        // PUSH NEW PRODUCT using push()
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    alert(' Product Added Successfully!');
}

function updateCartCount() {
    // CALCULATE TOTAL using reduce() and length
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = `(${totalItems})`;
}

// 6. SEARCH FUNCTIONALITY (REAL-TIME)
document.getElementById('search-input').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    // FILTER using filter() and toLowerCase()
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
});

// 7. CATEGORY FILTER
document.getElementById('category-filter').addEventListener('change', function(event) {
    const selectedCategory = event.target.value;
    
    // FILTER BY CATEGORY using filter()
    const filteredProducts = selectedCategory === '' 
        ? allProducts 
        : allProducts.filter(product => product.category === selectedCategory);
    
    renderProducts(filteredProducts);
});

// INITIALIZE - FETCH PRODUCTS ON LOAD
fetchProducts();
