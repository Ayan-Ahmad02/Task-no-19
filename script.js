const services = [
    {
        name: "Dry Cleaning",
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_30wAjKifT_1pSUQDismxzpurRWs5SNkKyYED66C5G2e0wr23VHaTSfHM&s=10"
    },
    {
        name: "Leather & Suede Cleaning",
        price: 999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Q_xlj74v4aN3s2SpgH3kSxqk2CG8rffmZRerR4-2HOXOzix7kEgAbc0&s=10"
    },
    {
        name: "Ironing",
        price: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh5ilW_HD2-wWAav7BWdrb_acwOzAlrDMi3ErDxIW6aoE2xIMeGsYTPQ&s=10"
    },
    {
        name: "Wedding Dress Cleaning",
        price: 2400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43gCoEMm5jggAgkY4hvgsiPAQnYTVfEF1fKQoTXGdOg&s=10"
    },
    {
        name: "Wash & Fold",
        price: 140,
        image: "https://images.ctfassets.net/exql6ar8lq2x/7jAutDzhLPFYI43qPNVdIg/814676b136cdf3066581cd8c5ca96c0e/Woman_Holding_Folded_Clothes.jpg"
    },
    {
        name: "Stain Removal",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoxuStOEVBZzTKS6FoQqim2wxpklAcw9iqZaO0YmX750mEe-64kvCgko&s=10"
    }
];

let currentIndex = 0;
let cart = [];

const serviceImage = document.getElementById("service-image");
const serviceName = document.getElementById("service-name");
const servicePrice = document.getElementById("service-price");

const addBtn = document.querySelector(".add-btn");
const skipBtn = document.querySelector(".skip-btn");
const logoutBtn = document.querySelector(".logout-btn");

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

const bookingForm = document.getElementById("bookingForm");

function showService() {

    if (currentIndex >= services.length) {

        document.querySelector(".service-card").innerHTML = `
            <h2>🎉 All Services Viewed</h2>
            <p>You can now book your selected services.</p>
        `;

        return;
    }

    const service = services[currentIndex];

    serviceImage.src = service.image;
    serviceName.textContent = service.name;
    servicePrice.textContent = `₹${service.price}`;
}

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <tr>
                <td colspan="3">
                    <div class="empty-cart">
                        <i class="fa-solid fa-circle-info"></i>
                        <p>No Items Added</p>
                        <small>Add items from the services section.</small>
                    </div>
                </td>
            </tr>
        `;

        totalPrice.textContent = "₹0";
        return;
    }

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price;

        cartItems.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${cart[i].name}</td>
                <td>₹${cart[i].price}</td>
            </tr>
        `;
    }

    totalPrice.textContent = `₹${total}`;
}

addBtn.addEventListener("click", function () {

    cart.push(services[currentIndex]);

    updateCart();

    currentIndex++;

    showService();
});

skipBtn.addEventListener("click", function () {

    currentIndex++;

    showService();
});

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }

    if (cart.length === 0) {

        alert("Please add at least one service.");

        return;
    }

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    alert(
        "Booking Successful!\n\n" +
        "Customer : " + name +
        "\nEmail : " + email +
        "\nServices : " + cart.length +
        "\nTotal Amount : ₹" + total
    );

    bookingForm.reset();

    cart = [];
    currentIndex = 0;

    updateCart();
    showService();
});

logoutBtn.addEventListener("click", function () {

    alert("Logged Out Successfully");

});

showService();
updateCart();
