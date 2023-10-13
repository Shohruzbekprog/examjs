const cartLengthContent = document.querySelector(".count");
let mobileTotalProductNumber = document.querySelector(".countt");

let cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];

function getCartLength() {
  cartLengthContent.innerHTML = cartProducts.length;
  mobileTotalProductNumber.innerHTML = cartProducts.length;
}
getCartLength();


const favouriteNumber = document.querySelector("#count-favourite");
const favoriteNumberShowMobile = document.querySelector('.fav-counter');

let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProducts = JSON.parse(favoriteProductsJson) || [];

function getFavoriteNumber() {
  favouriteNumber.textContent = favoriteProducts.length;
  favoriteNumberShowMobile.textContent = favoriteProducts.length;
}
getFavoriteNumber();