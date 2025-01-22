// app.js
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: 20, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: 30, image: "https://via.placeholder.com/150" }
    ];

    const productContainer = document.getElementById("product-container");
    const cartContainer = document.getElementById("cart-container");
    const cart = [];

    function renderProducts() {
        productContainer.innerHTML = products.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join("");
    }

    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cartContainer.innerHTML = cart.map(item => `
                <div>
                    ${item.name} - $${item.price} x ${item.quantity}
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `).join("");
        }
    }

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        const cartItem = cart.find(item => item.id === id);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    };

    window.removeFromCart = function (id) {
        const index = cart.findIndex(item => item.id === id);

        if (index !== -1) {
            cart[index].quantity--;

            if (cart[index].quantity === 0) {
                cart.splice(index, 1);
            }
        }

        renderCart();
    };

    renderProducts();
    renderCart();
});
