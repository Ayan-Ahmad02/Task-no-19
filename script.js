// ===============================
// Services Data
// ===============================

const services = [
    {
        name: "Dry Cleaning",
        price: 200.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_30wAjKifT_1pSUQDismxzpurRWs5SNkKyYED66C5G2e0wr23VHaTSfHM&s=10"
    },
    {
        name: "Leather & Suede cleaning",
        price: 999.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Q_xlj74v4aN3s2SpgH3kSxqk2CG8rffmZRerR4-2HOXOzix7kEgAbc0&s=10"
    },
    {
        name: "Ironing",
        price: 30.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh5ilW_HD2-wWAav7BWdrb_acwOzAlrDMi3ErDxIW6aoE2xIMeGsYTPQ&s=10"
    },
    {
        name: "Wedding Dress Cleaning",
        price: 2400.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43gCoEMm5jggAgkY4hvgsiPAQnYTVfEF1fKQoTXGdOg&s=10"
    },
    {
        name: "Wash & Fold",
        price: 140.00,
        image: "https://images.ctfassets.net/exql6ar8lq2x/7jAutDzhLPFYI43qPNVdIg/814676b136cdf3066581cd8c5ca96c0e/Woman_Holding_Folded_Clothes.jpg"
    },
    {
        name: "Stain Removal",
        price: 500.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoxuStOEVBZzTKS6FoQqim2wxpklAcw9iqZaO0YmX750mEe-64kvCgko&s=10"
    }
];


// ===============================
// Variables
// ===============================

let currentIndex = 0;
let cart = [];

// ===============================
// Elements
// ===============================

const serviceImage = document.getElementById("service-image");
const serviceName = document.getElementById("service-name");
const servicePrice = document.getElementById("service-price");

const addBtn = document.querySelector(".add-btn");
const skipBtn = document.querySelector(".skip-btn");

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

const bookingForm = document.getElementById("bookingForm");

// ===============================
// Show Current Service
// ===============================

function showService() {

    if (currentIndex >= services.length) {

        document.querySelector(".service-card").innerHTML = `
            <h2>🎉 All Services Viewed</h2>
            <p>You can now book your selected services.</p>
        `;

        return;
    }

    serviceImage.src = services[currentIndex].image;
    serviceName.textContent = services[currentIndex].name;
    servicePrice.textContent = "₹" + services[currentIndex].price;

}

// ===============================
// Add Item
// ===============================

addBtn.addEventListener("click", function () {

    cart.push(services[currentIndex]);

    updateCart();

    currentIndex++;

    showService();

});

// ===============================
// Skip Item
// ===============================

skipBtn.addEventListener("click", function () {

    currentIndex++;

    showService();

});

// ===============================
// Update Cart
// ===============================

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

    cartItems.innerHTML = `
    <tr class="empty-row">
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

    cart.forEach(function (item, index) {

        total += item.price;

        cartItems.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
        </tr>
        `;

    });

    totalPrice.textContent = "₹" + total;

}

// ===============================
// Booking Form
// ===============================

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {

        alert("Please fill all fields.");

        return;
    }

    if (cart.length === 0) {

        alert("Please add at least one service.");

        return;
    }

    alert(
        "Booking Successful!\n\n" +
        "Customer: " + name +
        "\nServices Booked: " + cart.length +
        "\nTotal Amount: ₹" +
        cart.reduce((sum, item) => sum + item.price, 0)
    );

    bookingForm.reset();

    cart = [];

    currentIndex = 0;

    updateCart();

    showService();

});

// ===============================
// Logout
// ===============================

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", function () {

    alert("Logged Out Successfully");

});

// ===============================
//              Start
// ===============================

showService();

updateCart();