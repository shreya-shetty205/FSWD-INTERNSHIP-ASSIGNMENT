const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 500,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 20000,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 4,
        name: "Jeans",
        price: 1500,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    }
];

const container = document.getElementById("product-container");
const filter = document.getElementById("filter");

function displayProducts(data) {
    container.innerHTML = "";

    data.forEach(product => {
        const card = `
            <div class="card">
                <img src="${product.image}" />
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

displayProducts(products);

filter.addEventListener("change", () => {
    const value = filter.value;

    if (value === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === value);
        displayProducts(filtered);
    }
});