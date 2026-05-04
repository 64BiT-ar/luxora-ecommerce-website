const productDatabase = [
    {
        id: 1,
        name: "Minimalist Leather Wallet",
        category: "accessories",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        description: "Premium genuine leather with RFID protection",
        rating: 4.8,
        reviews: 156,
        badge: "Best Seller",
        inStock: true
    },
    {
        id: 2,
        name: "Wireless Noise-Canceling Headphones",
        category: "electronics",
        price: 249.99,
        originalPrice: 349.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        description: "40-hour battery life with premium sound quality",
        rating: 4.9,
        reviews: 542,
        badge: "New",
        inStock: true
    },
    {
        id: 3,
        name: "Marble Coffee Table",
        category: "home",
        price: 399.99,
        originalPrice: 499.99,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        description: "Elegant natural marble with stainless steel base",
        rating: 4.7,
        reviews: 89,
        badge: "Trending",
        inStock: true
    },
    {
        id: 4,
        name: "Stainless Steel Watch",
        category: "accessories",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        description: "Swiss movement with sapphire crystal",
        rating: 4.6,
        reviews: 234,
        badge: "Best Seller",
        inStock: true
    },
    {
        id: 5,
        name: "Organic Cotton Bedding Set",
        category: "home",
        price: 179.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop",
        description: "Hypoallergenic and sustainable cotton",
        rating: 4.8,
        reviews: 312,
        badge: "New",
        inStock: true
    },
    {
        id: 6,
        name: "Premium Sunglasses",
        category: "accessories",
        price: 159.99,
        originalPrice: 229.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        description: "UV protection with Italian crafted frames",
        rating: 4.7,
        reviews: 167,
        badge: null,
        inStock: true
    },
    {
        id: 7,
        name: "Portable Power Bank",
        category: "electronics",
        price: 79.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        description: "65W fast charging with 30,000mAh capacity",
        rating: 4.5,
        reviews: 423,
        badge: "Best Seller",
        inStock: true
    },
    {
        id: 8,
        name: "Ceramic Table Lamp",
        category: "home",
        price: 129.99,
        originalPrice: 189.99,
        image: "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=400&h=400&fit=crop",
        description: "Handcrafted with warm dimmable LED",
        rating: 4.6,
        reviews: 98,
        badge: "Trending",
        inStock: true
    },
    {
        id: 9,
        name: "Canvas Messenger Bag",
        category: "accessories",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description: "Water-resistant canvas with leather trim",
        rating: 4.7,
        reviews: 201,
        badge: null,
        inStock: true
    },
    {
        id: 10,
        name: "Smart Temperature Bottle",
        category: "electronics",
        price: 89.99,
        originalPrice: 139.99,
        image: "https://images.unsplash.com/photo-1602143407151-7e36dd5f5a0e?w=400&h=400&fit=crop",
        description: "App-controlled with OLED display",
        rating: 4.4,
        reviews: 156,
        badge: "New",
        inStock: true
    },
    {
        id: 11,
        name: "Bamboo Cutting Board Set",
        category: "home",
        price: 59.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop",
        description: "Eco-friendly bamboo with stainless steel knives",
        rating: 4.8,
        reviews: 287,
        badge: "Best Seller",
        inStock: true
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 119.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        description: "360-degree sound with 24-hour battery",
        rating: 4.5,
        reviews: 378,
        badge: null,
        inStock: true
    }
];

let shoppingCart = [];

const searchToggleBtn = document.querySelector('.search-toggle');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const searchCloseBtn = document.querySelector('.search-close');
const searchResults = document.getElementById('searchResults');

const cartToggleBtn = document.querySelector('.cart-toggle');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const cartCloseBtn = document.querySelector('.cart-close');
const cartCount = document.getElementById('cartCount');

const featuredProductsGrid = document.getElementById('featuredProducts');
const allProductsGrid = document.getElementById('allProducts');
const filterButtons = document.querySelectorAll('.filter-btn');
const collectionCards = document.querySelectorAll('.collection-card');

document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    setupEventListeners();
    loadCartFromStorage();
});

function initializeProducts() {
    const featuredProducts = productDatabase.slice(0, 4);

    renderProducts(featuredProducts, featuredProductsGrid);
    renderProducts(productDatabase, allProductsGrid);
}

function renderProducts(products, container) {
    container.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const priceHTML = product.originalPrice
        ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>`
        : '';

    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '½' : '');

    const badgeHTML = product.badge
        ? `<div class="product-badge">${product.badge}</div>`
        : '';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="star">${stars}</span>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="price-current">$${product.price.toFixed(2)}</span>
                ${priceHTML}
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <span>+ Add to Cart</span>
            </button>
        </div>
    `;

    return card;
}

function setupEventListeners() {
    searchToggleBtn.addEventListener('click', toggleSearchPanel);
    searchCloseBtn.addEventListener('click', closeSearchPanel);
    searchInput.addEventListener('input', performSearch);

    cartToggleBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => filterProducts(e.target.dataset.filter));
    });

    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.dataset.filter;

            filterProducts(filter);
            document.querySelector('.all-products-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function toggleSearchPanel() {
    searchPanel.classList.toggle('active');

    if (searchPanel.classList.contains('active')) {
        searchInput.focus();
    }
}

function closeSearchPanel() {
    searchPanel.classList.remove('active');
}

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

    const results = productDatabase.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<p class="empty-cart-message">No products found</p>';
        return;
    }

    searchResults.innerHTML = '';

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';

        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 0.5rem;">
            <p style="font-size: 0.85rem; font-weight: 600;">${product.name}</p>
            <p style="font-size: 0.8rem; color: var(--accent-color); margin-top: 0.3rem;">$${product.price.toFixed(2)}</p>
        `;

        resultItem.addEventListener('click', () => {
            addToCart(product.id);
            closeSearchPanel();
            openCart();
        });

        searchResults.appendChild(resultItem);
    });
}

function filterProducts(category) {
    filterButtons.forEach(btn => {
        btn.classList.remove('active');

        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });

    const filteredProducts = category === 'all'
        ? productDatabase
        : productDatabase.filter(product => product.category === category);

    renderProducts(filteredProducts, allProductsGrid);
}

function addToCart(productId) {
    const product = productDatabase.find(product => product.id === productId);

    if (!product) {
        return;
    }

    const existingItem = shoppingCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    animateCartButton();
}

function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);

    saveCartToStorage();
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = shoppingCart.find(item => item.id === productId);

    if (item) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');

    cartItemsContainer.innerHTML = '';

    const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (shoppingCart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartSummary.style.display = 'none';
        return;
    }

    shoppingCart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div>
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <input type="number" value="${item.quantity}" readonly>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    calculateAndDisplayTotals();
    cartSummary.style.display = 'block';
}

function calculateAndDisplayTotals() {
    const subtotal = shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function openCart() {
    cartModal.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function animateCartButton() {
    cartToggleBtn.style.animation = 'none';

    setTimeout(() => {
        cartToggleBtn.style.animation = 'pulse 0.4s ease-out';
    }, 10);
}

function saveCartToStorage() {
    try {
        localStorage.setItem('luxora_cart', JSON.stringify(shoppingCart));
    } catch (error) {
        console.warn('Cart could not be saved.');
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('luxora_cart');

        if (savedCart) {
            shoppingCart = JSON.parse(savedCart);
            updateCartUI();
        }
    } catch (error) {
        shoppingCart = [];
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearchPanel();
        closeCart();
    }
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                img.src = img.dataset.src || img.src;
                img.removeAttribute('data-src');

                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => imageObserver.observe(img));
}