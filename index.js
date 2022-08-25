const emailMenu = document.querySelector('.email')
const menuDesktop = document.querySelector('.inactive')

emailMenu.addEventListener('click', toggleMenuDesktop)



function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
}