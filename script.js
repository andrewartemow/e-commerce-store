const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeCartTabBtn = document.querySelector('.cart-tab_close-btn');
const addToCartBtn = document.querySelector('.add-to-cart_btn');
const cartList = document.querySelector('.cart-list-ul');

cartIcon.addEventListener('click', () => {
  cartTab.classList.toggle('show-cart');
});

closeCartTabBtn.addEventListener('click', () => {
  cartTab.classList.toggle('show-cart');
});

addToCartBtn.addEventListener('click', addToCart);

function removeFromCart() {
  cartList.innerHTML = ``;
  document.querySelector('.checkout-link').classList.add('disabled');
}

function init() {
  cartList.innerHTML = '';
}

function addToCart() {
  cartList.innerHTML = `
<li>
<img src="./assets/1.jpg" alt="" />
<h4>Flower</h4>
<span>price: $39.99</span>
<button onclick="removeFromCart()">remove</button>
</li>
`;
  document.querySelector('.checkout-link').classList.remove('disabled');
}
