const emailMenu = document.querySelector('.email')
const desktopMenu = document.querySelector('.menu-desktop')
const iconMenu = document.querySelector('.icon-menu')
const mobileMenu = document.querySelector('.menu-mobile')
const iconCart = document.querySelector('.navbar-shopping-cart-icon')
const shoppingCartMenu = document.querySelector('#shopping-cart-container')

const productList = [];

let coolBoard = {
    name: 'coolboard',
    price: 120,
    image: './logos/coolboard.webp',
}

let bicycle = {
    name: 'coolboard',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}

let product1 = {
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
}

let product2 = {
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
}

let product3 = {
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
}

productList.push(coolBoard, bicycle, product1, product2, product3)
productList.push(coolBoard, bicycle, product1, product2, product3)

let productId = 0;

function renderProducts(productList) {
    for (product of productList) {
        productId++
        const htmlCards = `
        <div id="product-id-${productId}" class="product-card">
        <img id="productid-img-${productId}" src='${product.image}' alt="" class="product-card-img">
        
        <div class="product-card-details">
        <div id="product-info" class="product-info">
        <p>$ ${product.price}</p>
        <p>${product.name}</p>
        </div>
        <figure class="icon-card-img">
        <img class="icon-cart" src="./icons/bt_add_to_cart.svg" alt="add-to-cart">
        </figure>
        </div>
        </div>
        `
        
        const cardsContainer = document.querySelector('.cards-container')
        cardsContainer.innerHTML += htmlCards
    }

}

renderProducts(productList);

emailMenu.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconCart.addEventListener('click', toggleShoppingCartMenu)


const imgProductCard = document.querySelectorAll('.product-card-img');
imgProductCard.forEach( node => {
    node.addEventListener('click', openAsideProductDetail);
})

const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

const productDetailAside = document.querySelector('#product-detail')


function toggleDesktopMenu() {
    productDetailAside.classList.add('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')
 
    if (!isMobileMenuClosed || !isShoppingCartMenuClosed) {
        mobileMenu.classList.add('inactive');
        shoppingCartMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productDetailAside.classList.add('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isShoppingCartMenuClosed) {
        desktopMenu.classList.add('inactive');
        shoppingCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu() {
    productDetailAside.classList.add('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive')
}

function openAsideProductDetail() {
    mobileMenu.classList.add('inactive');
    shoppingCartMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');

    productDetailAside.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailAside.classList.add('inactive');
}
