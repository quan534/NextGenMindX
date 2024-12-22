alert("1")
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDBWYgCSW-XvDEliAm_cHFSg4LIv29joJw",
    authDomain: "old-books-seller.firebaseapp.com",
    databaseURL: "https://old-books-seller-default-rtdb.firebaseio.com",
    projectId: "old-books-seller",
    storageBucket: "old-books-seller.firebasestorage.app",
    messagingSenderId: "696373662236",
    appId: "1:696373662236:web:587ac6b5a46f544797c5d9",
    measurementId: "G-VGLV0VPY4G"
  };
const app = firebase.initializeApp(firebaseConfig)
const database = firebase.database()
alert("2")




class Card {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    renderCard() {
        const card = document.createElement("div");
        card.className = "col-md-3"; // Assign Bootstrap class
        card.innerHTML = `
            <div class="product-item">
                <figure class="product-style">
                    <img src="images/product-item1.jpg" alt="Books" class="product-image">
                    <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                </figure>
                <figcaption>
                    <h3>${this.title}</h3>
                    <span>${this.author}</span>
                    <div class="item-price">${this.price}</div>
                </figcaption>
            </div>`;
        return card;
    }
}

function createCard() {

    const inputTitle = prompt("Enter title:");
    const inputAuthor = prompt("Enter author:");
    const inputPrice = prompt("Enter price:");
    const img = prompt()

    if (inputTitle && inputAuthor && inputPrice) {
        // const newBookRef = database.ref("books").push() 
        // newBookRef.set({
        //     title:inputTitle,
        //     author:inputAuthor,
        //     price:inputPrice
        // })

        const card = new Card(inputTitle, inputAuthor, inputPrice);
        const cardElement = card.renderCard();

        // Append the new card to the container
        const cardContainer = document.querySelector("#featured-books > div > div:nth-child(1) > div > div.product-list.aos-init.aos-animate > div"); // Adjust this selector as needed
        cardContainer.appendChild(cardElement);

    } else {
        alert("Please fill in all fields!");
    }

}
alert("3")
// function editCard() {
//     const inputIndex = prompt("Enter index:");
//     const inputTitle = prompt("Enter title:");
//     const inputAuthor = prompt("Enter author:");
//     const inputPrice = prompt("Enter price:");

//     if (inputTitle && inputAuthor && inputPrice) {
//         const card = new Card(inputTitle, inputAuthor, inputPrice);
//         const cardElement = card.renderCard();

//         // Append the new card to the container
//         const cardContainer = document.querySelector("#featured-books > div > div:nth-child(1) > div > div.product-list.aos-init.aos-animate > div"); // Adjust this selector as needed
//         cardContainer.appendChild(cardElement);
//     } else {
//         alert("Please fill in all fields!");
//     }
// }

// Create the button to add cards
const btn1 = document.createElement("button");
btn1.textContent = "Add New Card";
btn1.className = "btn btn-primary"; // Bootstrap button style
btn1.addEventListener("click", createCard);
alert("4")
// Append the button to the DOM
const header = document.querySelector("#featured-books > div > div:nth-child(1) > div > div.section-header.align-center > h2");
header.appendChild(btn1);
alert("5")