const emailMenu = document.querySelector('.email')
const desktopMenu = document.querySelector('.menu-desktop')
const iconMenu = document.querySelector('.icon-menu')
const mobileMenu = document.querySelector('.menu-mobile')
const iconCart = document.querySelector('.navbar-shopping-cart-icon')
const shoppingCartMenu = document.querySelector('.product-detail')

// const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
// const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
// const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')

emailMenu.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconCart.addEventListener('click', toggleShoppingCartMenu)

function toggleDesktopMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')
 
    if (!isMobileMenuClosed || !isShoppingCartMenuClosed) {
        mobileMenu.classList.add('inactive');
        shoppingCartMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isShoppingCartMenuClosed) {
        desktopMenu.classList.add('inactive');
        shoppingCartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive')
}