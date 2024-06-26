const gundams = [
  {
    id: "product1",
    img1: "https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg",
    name: "Daban 1/100 MG Infinity Justice Gundam",
    price: "680,000VNĐ",
    type: "mg1100",
  },

  {
    id: "product2",
    img1: "https://gundamshop.vn/wp-content/uploads/2023/04/6843e4d2-81c4-48e5-8ea6-797ae8916e53.jpg",
    name: "Daban MG 6632 1/100 Gundam Star Build Strike",
    price: "820,000VNĐ",
    type: "mg1100",
  },

  {
    id: "product3",
    img1: "https://gundamshop.vn/wp-content/uploads/2020/12/HTB1qVb8IpXXXXaqXXXXq6xXFXXXE.jpg",
    name: "DABAN 1/100 MG SAZABI VER.KA",
    price: "1,080,000VNĐ",
    type: "mg1100",
  },

  {
    id: "product4",
    img1: "https://gundamshop.vn/wp-content/uploads/2021/05/DABAN-8808-Gundam-m-u-MG-1-100-GN-HS-A01-Avalanche-EXIA-Di-ng-Ph-768x768.jpg",
    name: "Daban 8808 1/100 MG Avalanche Exia Dash",
    price: "1,050,000VNĐ",
    type: "mg1100",
  },

  {
    id: "product5",
    img1: "https://gundamshop.vn/wp-content/uploads/2023/05/1633-24.jpg",
    name: "Perfect Grade Unleashed Gundam RX-78-2",
    price: "8,500,000VNĐ",
    type: "pg160",
  },

  {
    id: "product6",
    img1: "https://gundamshop.vn/wp-content/uploads/2020/07/PG-GUNDAM-ASTRAY-RED-FRAME-KAI.jpg",
    name: "PG GUNDAM ASTRAY RED FRAME KAI-Gundam Chính hãng Bandai",
    price: "7,800,000VNĐ",
    type: "pg160",
  },

  {
    id: "product7",
    img1: "https://gundamshop.vn/wp-content/uploads/2020/07/4111-819x1024-1-768x960.jpg",
    name: "PG GUNDAM UNICORN-Gundam Chính hãng Bandai",
    price: "4,800,000VNĐ",
    type: "pg160",
  },
  {
    id: "product8",
    img1: "https://gundamshop.vn/wp-content/uploads/2020/07/DB-Gundam-1-60-PG-Ti-m-K-ch-ASTRAY-Red-Frame-MBF-P02.jpg_q50-1.jpg",
    name: "DABAN PG GUNDAM ASTRAY RED FRAME",
    price: " 1,850,000VNĐ",
    type: "pg160",
  },
  {
    id: "product9",
    img1: "https://gundamshop.vn/wp-content/uploads/2020/12/31-5.jpg",
    name: "RG GUNDAM BUILD STRIKE FULL PACKAGE-Gundam Chính hãng Bandai",
    price: "700,000VNĐ",
    type: "rg1144",
  },
  {
    id: "product10",
    img1: "https://azgundam.com/wp-content/uploads/2018/08/2-4.jpg",
    name: "RG GUNDAM ASTRAY RED FRAME-Gundam Chính hãng Bandai",
    price: "700,000VNĐ",
    type: "rg1144",
  },
  {
    id: "product11",
    img1: "https://file.hstatic.net/1000231532/file/gundam_exia_rg__1144_vietnam_grande.jpg",
    name: "RG GUNDAM EXIA-Gundam Chính hãng Bandai",
    price: "700,000VNĐ",
    type: "rg1144",
  },
  {
    id: "product12",
    img1: "https://vietgundam.com/wp-content/uploads/2023/04/har_aznable_custom_mobile_suit_-_rg_-_1144_-_mo_hinh_gundam_chinh_hang_13fecffd56ca47bda22492ed953f01db_master.jpg",
    name: "RG CHAR’S ZAKU II-Gundam Chính hãng Bandai",
    price: "700,000VNĐ",
    type: "rg1144",
  },
];

localStorage.setItem("ListProducts", JSON.stringify(gundams));

function load() {
  var out = "";
  for (let i = 0; i < gundams.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${gundams[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${gundams[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${gundams[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${gundams[i].id}')">More information...</button>
                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function loadAdmin() {
  var out = "";
  for (let i = 0; i < gundams.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${gundams[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${gundams[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${gundams[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${gundams[i].id}')">More information...</button>
                      <button class="btn btn-danger" onclick="deleteProduct('${gundams[i].id}')">Xóa sản phẩm</button>

                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${gundams[i].id}')">Edit Item</button>

                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("loadAdmin").innerHTML = out;
}

function renderListProduct(categories) {
  var out = "";
  for (let i = 0; i < categories.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                  <img src="${categories[i].img1}" class="card-img-top" alt="Product 1 Image" style="height: 300px;")" >
                  <div class="card-body">
                      <h5 class="card-title">${categories[i].name}</h5>
                      <hr>

                      <div class = "card-bottom">
                      <p class="card-text">${categories[i].price}</p>
                      <button class="btn btn-primary add-to-cart-btn" data-id="product1" data-image="https://gundamshop.vn/wp-content/uploads/2021/05/M%C3%B4-h%C3%ACnh-MG-ZGMF-X19A-Infinite-Justice-Gundam-Bandai-6.jpg" class="buttonAdd"  onclick="renderProductDetail('${categories[i].id}')">More information...</button>
                      </div> 
                    </div>
              </div>
            </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function renderMg1100Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsMg1100 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "mg1100") {
      listProductsMg1100.push(listProducts[i]);
    }
  }
  renderListProduct(listProductsMg1100);
}

function renderPg160Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsPg160 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "pg160") {
      listProductsPg160.push(listProducts[i]);
    }
  }
  renderListProduct(listProductsPg160);
}

function renderRg1144Product() {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  const listProductsRg1144 = [];
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].type == "rg1144") {
      listProductsRg1144.push(listProducts[i]);
    }
  }
  renderListProduct(listProductsRg1144);
}

// Hàm kiểm tra trạng thái đăng nhập của người dùng
function checkLoggedIn() {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    return true;
  } else {
    return false;
  }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productToAdd = gundams.find((product) => product.id === id);

  let existingProduct = cart.find((product) => product.id == productToAdd.id);

  if (existingProduct) {
    // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
    existingProduct.quantity += 1;
  } else {
    console.log("productToAdd", productToAdd);
    // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
    productToAdd.quantity = 1; // Thiết lập số lượng ban đầu là 1
    cart.push(productToAdd);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Sản phẩm đã được cập nhật trong giỏ hàng.");
}

// Hiển thị thông tin chi tiết sản phẩm
function renderProductDetail(idProduct) {
  let listProducts = JSON.parse(localStorage.getItem("ListProducts"));
  let productItem = listProducts.find((item) => {
    return item.id == idProduct;
  });
  let result = "";
  result += `
            <div class="container cart-container">
              <div class="left">
                  <img src="${productItem.img1}" alt="ảnh gundam">
              </div>
          
              <div class="right">
                  <h2>${productItem.name}</h2><hr>
                  <h5>${productItem.price}</h5>
                  <button class="btn btn-primary add-to-cart-btn"  onclick="addToCart('${productItem.id}')" >Thêm vào giỏ hàng</button>
              </div>
            </div>
            `;
  document.querySelector(".content-container").style.display = "flex";

  document.querySelector(".content-container").innerHTML = result;

  document.querySelector(".des-container").style.display = "none";

  document.querySelector(".carousel-inner").style.display = "none";
}

//Cart
function showCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("cartItems", cartItems);
  let cartHTML = "";
  if (cartItems.length === 0) {
    cartHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
  } else {
    cartHTML += "<ul>";
    cartItems.forEach(function (item) {
      cartHTML += `
                    <li>
                      <div>
                          <img src="${item.img1}" alt="${item.name}">
                      </div>
                      <div class="details">
                          <h4>${item.name}</h4>
                          <p> Money: ${item.price}</p>
                          <div>
                          <button onclick="decreaseQuantity('${
                            item.id
                          }')">-</button>
                          <span id="${item.id}-quantity">${
        item.quantity || 1
      }</span>
                          <button onclick="increaseQuantity('${
                            item.id
                          }')">+</button>
                          <button onclick="removeItem('${
                            item.id
                          }')">Xóa</button>
                          </div>
                      </div>
                    </li>
                `;
    });
    cartHTML += "</ul>";
  }
  cartHTML += `<p class="total-price">Tổng tiền: ${calculateTotal()} VNĐ</p>`;
  document.getElementById("cart").innerHTML = cartHTML;
  document.getElementById("cart").style.display = "block";
  document.querySelector(".des-container").style.display = "none";
  document.querySelector(".carousel-inner").style.display = "none";
  document.querySelector(".cart-container").style.display = "none";
}

function decreaseQuantity(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) - 1;
    if (cartItems[itemIndex].quantity <= 0) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    showCart();
  }
}

function increaseQuantity(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    showCart();
  }
}

function removeItem(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = cartItems.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  showCart();
}

function calculateTotal() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartItems.forEach(function (item) {
    let itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    let itemTotal = itemPrice * (item.quantity || 1);
    total += itemTotal;
  });

  return total;
}

function removeProductCardFromMainPage(id) {
  let productCard = document.getElementById(id);
  if (productCard) {
    productCard.remove();
  }
}
