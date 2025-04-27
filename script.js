const products = [
    {
        id: 1,
        title: "Rolex",
        price: 600,
        description: "Boîtier acier inox 316L poli et brossé, verre minéral bombé traité anti-reflet : cette montre chronographe propose un mouvement quartz haute précision. Les trois compteurs (30 min, 60 s, 24 h) et la date à 4 h se lisent en un coup d’œil, tandis que le bracelet en cuir véritable, équipé d’une boucle papillon, assure un port élégant.",
        category: "montre",
        image: "images/rolex.jpg"
    },
    {
        id: 2,
        title: "Casque audio sans fil",
        price: 150,
        description: "Profitez d'un son cristallin et d'une réduction de bruit active exceptionnelle avec ce casque confortable et élégant. Autonomie de 30 heures et connexion Bluetooth 5.0 pour une expérience sans fil optimale.",
        category: "electronique",
        image: "images/casque-audio.jpg"
    },
    {
        id: 3,
        title: "Veste en jean",
        price: 300,
        description: "Veste en jean classique avec un design moderne et tendance. Fabriquée avec du denim de haute qualité pour une durabilité maximale et un confort optimal au quotidien.",
        category: "vetements",
        image: "images/veste-jean.jpg"
    },
    {
        id: 4,
        title: "Baskets de Sport",
        price: 250,
        description: "Ces baskets de running légères offrent un amorti exceptionnel et un soutien optimal pour vos courses. Semelle extérieure durable et tige respirante pour un confort maximal sur les longues distances.",
        category: "sport",
        image: "images/basket-sport.jpg"
    },
    {
        id: 5,
        title: "Ordinateur portable ultrabook",
        price: 4000,
        description: "Ordinateur portable léger et puissant avec processeur de dernière génération, 16Go de RAM et 512Go de SSD. Écran haute résolution et autonomie exceptionnelle pour travailler n'importe où.",
        category: "electronique",
        image: "images/pc.jpg"
    },
    {
        id: 6,
        title: "Samsung S-24",
        price: 3500,
        description: "Dynamic AMOLED 2X de 6,8 pouces, résolution QHD+ (3088 x 1440), taux de rafraîchissement adaptatif de 1 à 120 Hz, avec une luminosité maximale de 2600 nits pour une excellente visibilité en extérieur.",
        category: "electronique",
        image: "images/Samsung.jpg"
    },
    {
        id: 7,
        title: "Lampe de bureau",
        price: 120,
        description: "Lampe de bureau moderne avec éclairage LED ajustable et port USB intégré. Design minimaliste qui s'adapte à tous les espaces de travail pour un éclairage optimal.",
        category: "maison",
        image: "images/lampe-bureau.jpg"
    },
    {
        id: 8,
        title: "Chemise Oxford",
        price: 200,
        description: "Cette chemise en tissu Oxford tissé serré combine robustesse et élégance décontractée. Sa coupe droite légèrement cintrée épouse la silhouette sans la contraindre.",
        category: "vetements",
        image: "images/chemise.jpg"
    },
    {
        id: 9,
        title: "Jean “Urban Stretch”",
        price: 230,
        description: "Machine à café programmable avec broyeur à grains intégré pour un café fraîchement moulu. Système de moussage de lait pour des cappuccinos et lattes parfaits.",
        category: "vetements",
        image: "images/pantalon.jpg"
    },
    {
        id: 10,
        title: "Montre connectée fitness",
        price: 150,
        description: "Montre connectée avec suivi d'activité, GPS intégré, mesure de la fréquence cardiaque et notifications smartphone. Résistante à l'eau et batterie longue durée.",
        category: "montre",
        image: "images/montre-fitness.jpg"
    },
    {
        id: 11,
        title: "Enceinte Bluetooth portable",
        price: 200,
        description: "Enceinte sans fil compacte avec un son puissant et des basses profondes. Résistante à l'eau et aux chocs, avec une autonomie de 12 heures pour vos soirées en plein air.",
        category: "electronique",
        image: "images/enceinte-bluetooth.jpg"
    },
    {
        id: 12,
        title: "Montre “Classic Chrono”",
        price: 220,
        description: "Boîtier acier inox 316L poli et brossé, verre minéral bombé traité anti-reflet : cette montre chronographe propose un mouvement quartz haute précision. Les trois compteurs (30 min, 60 s, 24 h) et la date à 4 h se lisent en un coup d’œil, tandis que le bracelet en cuir véritable, équipé d’une boucle papillon, assure un port élégant.",
        category: "montre",
        image: "images/montre.jpg"
    },
    {
        id: 13,
        title: "Smart-TV",
        price: 5000,
        description: "Un téléviseur équipé d’un système d’exploitation intégré permettant d’accéder à Internet, aux applications et aux contenus en ligne sans nécessiter d’appareil externe via Wi-Fi ou câble Ethernet.",
        category: "electronique",
        image: "images/smart-tv.jpg"
    },
    {
        id: 14,
        title: "T-shirt sportif respirant",
        price: 120,
        description: "T-shirt technique à séchage rapide, parfait pour toutes vos activités sportives. Tissu léger et respirant qui évacue la transpiration pour un confort optimal.",
        category: "sport",
        image: "images/tee-shirt.jpg"
    },
    {
        id: 15,
        title: "Parfum Pour Homme",
        price: 120,
        description: "Fragrance sophistiquée avec des notes de bois de santal, vanille et agrumes. Flacon élégant et longue tenue pour une présence subtile tout au long de la journée.",
        category: "beaute",
        image: "images/parfum.jpg"
    },
    {
        id: 16,
        title: "Sneaker",
        price: 500,
        description: "Avec sa tige en mesh technique ultra-respirant et ses renforts synthétiques stratégiques, cette sneaker allie légèreté et maintien. La semelle intermédiaire en EVA à double densité absorbe les chocs.",
        category: "sport",
        image: "images/sneaker.jpg"
    },
    
];

// Initialisation des variables
let cart = [];
let currentUser = null;
let filteredProducts = [...products];

// ------------- DOM Elements -------------
const productsContainer = document.getElementById('productsContainer');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const categoryFilter = document.getElementById('categoryFilter');
const minPriceFilter = document.getElementById('minPrice');
const maxPriceFilter = document.getElementById('maxPrice');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const productModal = document.getElementById('productModal');
const productModalBody = document.getElementById('productModalBody');
const closeProductModal = document.getElementById('closeProductModal');
const hamburger = document.getElementById('hamburger');
const navbarContainer = document.querySelector('.navbar-container');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutBtn');
const accountInfo = document.getElementById('accountInfo');
const accountLogged = document.getElementById('accountLogged');
const welcomeUser = document.getElementById('welcomeUser');
const cartIcon = document.getElementById('cartIcon');
const cartDropdown = document.getElementById('cartDropdown');

// ------------- Event Listeners -------------
document.addEventListener('DOMContentLoaded', init);
applyFiltersBtn.addEventListener('click', applyFilters);
resetFiltersBtn.addEventListener('click', resetFilters);
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});
closeProductModal.addEventListener('click', () => productModal.style.display = 'none');
hamburger.addEventListener('click', toggleMobileMenu);
loginBtn.addEventListener('click', showLoginModal);
registerBtn.addEventListener('click', showRegisterModal);
switchToRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'none';
    showRegisterModal();
});
switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'none';
    showLoginModal();
});
loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);
logoutBtn.addEventListener('click', handleLogout);
cartIcon.addEventListener('click', function() {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// Fermer les modals quand on clique en dehors
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (e.target === registerModal) {
        registerModal.style.display = 'none';
    } else if (e.target === productModal) {
        productModal.style.display = 'none';
    }
    
// Ferme le dropdown du panier si on clique ailleurs
cartDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
cartIcon.addEventListener('click', function(e) {
    e.stopPropagation();
        cartDropdown.style.display = 'block';
  });
  
document.addEventListener('click', function() {
    cartDropdown.style.display = 'none';
  });
  
});

// ------------- Functions -------------

// Initialisation
function init() {
    displayProducts(products);
    checkLoggedInUser();
    loadCart();
    updateCartUI();
}

// Afficher les produits
function displayProducts(products) {
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        productsContainer.innerHTML = '<div class="loading">Aucun produit ne correspond à votre recherche</div>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price.toFixed(2)} MAD </div>
                <div class="product-description">${product.description}</div>
                <div class="product-action">
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Ajouter
                    </button>
                    <span class="view-details" data-id="${product.id}">Voir détails</span>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
        
        // Event listeners pour les boutons
        const addToCartBtn = productCard.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id);
        });
        
        const viewDetailsBtn = productCard.querySelector('.view-details');
        viewDetailsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            showProductDetails(id);
        });
        
        //Pour voir les détails en faisant un Click sur la carte entière
        productCard.addEventListener('click', function() {
            const id = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
            showProductDetails(id);
        });
    });
}

// Filtrer les produits
function applyFilters() {
    const category = categoryFilter.value;
    const minPrice = parseFloat(minPriceFilter.value) || 0;
    const maxPrice = parseFloat(maxPriceFilter.value) || Infinity;
    
    filteredProducts = products.filter(product => {
        const matchCategory = category === 'all' || product.category === category;
        const matchPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchCategory && matchPrice;
    });
    
    displayProducts(filteredProducts);
}

// Réinitialiser les filtres
function resetFilters() {
    categoryFilter.value = 'all';
    minPriceFilter.value = '0';
    maxPriceFilter.value = '10000';
    filteredProducts = [...products];
    displayProducts(filteredProducts);
    searchInput.value = '';
}

// Rechercher des produits
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(filteredProducts);
        return;
    }
    
    const searchResults = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(searchResults);
}

// Afficher les détails d'un produit
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    productModalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.title}</h2>
                <div class="product-detail-category">${product.category}</div>
                <div class="product-detail-price">${product.price.toFixed(2)} MAD </div>
                <div class="product-detail-description">${product.description}</div>
                
                <div class="product-quantity">
                    <span>Quantité:</span>
                    <div class="quantity-control">
                        <button class="quantity-btn decrease">-</button>
                        <div class="quantity-value" id="productQuantity">1</div>
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
                
                <div class="product-detail-action">
                    <button class="add-to-cart-btn" id="addToCartDetail" data-id="${product.id}">
                        Ajouter au panier
                    </button>
                    <button class="wishlist-btn">
                        <i class="far fa-heart"></i> Favoris
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
    
    // Event listeners pour les boutons de quantité
    const decreaseBtn = productModalBody.querySelector('.decrease');
    const increaseBtn = productModalBody.querySelector('.increase');
    const quantityValue = productModalBody.querySelector('#productQuantity');
    const addToCartDetailBtn = productModalBody.querySelector('#addToCartDetail');
    
    decreaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityValue.textContent);
        if (quantity > 1) {
            quantityValue.textContent = quantity - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityValue.textContent);
        quantityValue.textContent = quantity + 1;
    });
    
    addToCartDetailBtn.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        const quantity = parseInt(quantityValue.textContent);
        addToCart(id, quantity);
        productModal.style.display = 'none';
    });
}

// Ajouter au panier
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Animation de confirmation
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Produit ajouté au panier !';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

// Mettre à jour l'UI du panier
function updateCartUI() {
    // Mise à jour du compteur
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Mise à jour du contenu du panier
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
    } else {
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} MAD </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <div class="quantity-value">${item.quantity}</div>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            
            // Event listeners pour les boutons de quantité
            const decreaseBtn = cartItem.querySelector('.decrease');
            const increaseBtn = cartItem.querySelector('.increase');
            const removeBtn = cartItem.querySelector('.remove-item');
            
            decreaseBtn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(id);
            });
            
            increaseBtn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                increaseQuantity(id);
            });
            
            removeBtn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removeFromCart(id);
            });
        });
    }
    
    // Mise à jour du total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Augmenter la quantité
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// Diminuer la quantité
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Supprimer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Sauvegarder le panier dans localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Charger le panier depuis localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Afficher le menu mobile
function toggleMobileMenu() {
    navbarContainer.classList.toggle('active');
}

// Gestion de la connexion utilisateur
function showLoginModal() {
    loginModal.style.display = 'block';
}

function showRegisterModal() {
    registerModal.style.display = 'block';
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulation d'authentification
    // Pour démonstration, on accepte n'importe quel email/password
    const user = {
        email: email,
        name: email.split('@')[0]
    };
    
    loginUser(user);
    loginModal.style.display = 'none';
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    // Simulation d'enregistrement 
    const user = {
        name: name,
        email: email
    };
    
    loginUser(user);
    registerModal.style.display = 'none';
}

function loginUser(user) {
    currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
    
    // Mise à jour de l'interface
    accountInfo.style.display = 'none';
    accountLogged.style.display = 'block';
    welcomeUser.textContent = `Bonjour, ${user.name}`;
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('user');
    
    // Mise à jour de l'interface
    accountInfo.style.display = 'block';
    accountLogged.style.display = 'none';
}

function checkLoggedInUser() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        
        // Mise à jour de l'interface
        accountInfo.style.display = 'none';
        accountLogged.style.display = 'block';
        welcomeUser.textContent = `Bonjour, ${currentUser.name}`;
    }
}

// Initialiser le custom CSS pour l'animation de notification
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #3a86ff;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '&uarr;';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.width = '50px';
backToTopBtn.style.height = '50px';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.backgroundColor = 'blue';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.fontSize = '20px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '99';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});