//Click to view cart items
const cartNav = document.querySelector('.cart-nav-title');
const cartItems = document.querySelector('.checkout-incart-container');
const arrowBtn = document.getElementById('arrow-down');

cartNav.addEventListener('click', () => {

    cartItems.classList.toggle('cart-active');
    arrowBtn.classList.toggle('arrow-up');   
});