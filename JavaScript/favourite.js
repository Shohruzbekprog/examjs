const favoriteRow = document.querySelector("#favourite-row");
const favouriteContainer = document.querySelector(".favourite_container");

function getFavCard(item) {
  let { image, description, discount, name, price, id } = item;
  let product = cartProducts.find((el) => el.id === id);
  let isFavourite = favoriteProducts.find((el) => el.id === id);
  return `<div id = "all-card-${id}" class="card parent-element">
              <img
                src="${image}"
                alt="biscuit"
              />
              <label class="container__heart">
              <input id = 'favoriteCheckbox-${id}' ${
    isFavourite ? "checked" : ""
  } type="checkbox"  onClick="addToFavoriteLatest(${id})"/>
                <div class="checkmark">
                  <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                      d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                      stroke-width="20px"
                      stroke="#ccc"
                      fill="none"
                    ></path>
                  </svg>
                </div>
              </label>
              <span class="discount_percent">-${discount}%</span>
              <div class="card_body">
                <div class="price">
                  <p>${price} ₽</p>
                  <span>50,50 ₽</span>
                </div>
                <div class="price_info">
                  <p>С картой</p>
                  <p>Обычная</p>
                </div>
                <a onclick = "moveToOwnPage(${id})" id = "name" href = "tovar.html" >${name}</a>
                <p class="main_info">${description}</p>
                <div class="rating">
                  ${getRating(item.rating)}
                </div>
                ${
                  product
                    ? `<div class="quantity-field" >
                  <button 
                    class="value-button decrease-button" 
                    onclick="decreaseLatest(${id})">-</button>
                    <div class="number"  id="quantity-${id}">${product.quantity}</div>
                  <button 
                    class="value-button increase-button" 
                    onclick="increaseLatest(${id})"
                  >+</button></div>`
                    : `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})">В корзину
            </button>`
                }
              </div>
            </div>`;
}

function getFavouriteOnes() {
  const minPrice = parseInt(priceInput[0].value);
  const maxPrice = parseInt(priceInput[1].value);

  favoriteRow.innerHTML = "";

  const filteredFavorites = favoriteProducts.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  if (filteredFavorites.length !== 0) {
    filteredFavorites.forEach((el) => {
      favoriteRow.innerHTML += getFavCard(el);
    });
    favoriteRow.classList.remove("empty");
    favouriteContainer.classList.remove("empty");
  } else {
    favoriteRow.classList.add("empty");
    favouriteContainer.classList.add("empty");
    favoriteRow.innerHTML = `
        <div class="alert alert-info" role="alert">
        <div class="empty-cart empty_basket">
        <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
           width="800px" height="800px" viewBox="0 0 446.853 446.853"
           xml:space="preserve">
        <g>
          <path d="M444.274,93.36c-2.558-3.666-6.674-5.932-11.145-6.123L155.942,75.289c-7.953-0.348-14.599,5.792-14.939,13.708
            c-0.338,7.913,5.792,14.599,13.707,14.939l258.421,11.14L362.32,273.61H136.205L95.354,51.179
            c-0.898-4.875-4.245-8.942-8.861-10.753L19.586,14.141c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591
            l59.491,23.371l41.572,226.335c1.253,6.804,7.183,11.746,14.104,11.746h6.896l-15.747,43.74c-1.318,3.664-0.775,7.733,1.468,10.916
            c2.24,3.184,5.883,5.078,9.772,5.078h11.045c-6.844,7.617-11.045,17.646-11.045,28.675c0,23.718,19.299,43.012,43.012,43.012
            s43.012-19.294,43.012-43.012c0-11.028-4.201-21.058-11.044-28.675h93.777c-6.847,7.617-11.047,17.646-11.047,28.675
            c0,23.718,19.294,43.012,43.012,43.012c23.719,0,43.012-19.294,43.012-43.012c0-11.028-4.2-21.058-11.042-28.675h13.432
            c6.6,0,11.948-5.349,11.948-11.947c0-6.6-5.349-11.948-11.948-11.948H143.651l12.902-35.843h216.221
            c6.235,0,11.752-4.028,13.651-9.96l59.739-186.387C447.536,101.679,446.832,97.028,444.274,93.36z M169.664,409.814
            c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117s19.116,8.574,19.116,19.117S180.207,409.814,169.664,409.814z
             M327.373,409.814c-10.543,0-19.116-8.573-19.116-19.116s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117
            S337.916,409.814,327.373,409.814z"/>
        </g>
        </svg>
      
        <h3>Mahsulot yo'q</h3>
      </div>
        </div>
      `;
  }
}
getFavouriteOnes();

function addToCartLatest(id) {
  addToCart(id);
  getFavouriteOnes();
}

function increaseLatest(id) {
  increase(id);
  getFavouriteOnes();
}

function decreaseLatest(id) {
  decrease(id);
  getFavouriteOnes();
}

function addToFavoriteLatest(id) {
  addToFavorite(id);
  getFavouriteOnes();
}
