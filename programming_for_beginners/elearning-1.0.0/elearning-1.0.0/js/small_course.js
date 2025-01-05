// import"https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"
// import"https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js"
// import"https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"
// const firebaseConfig = {
//     apiKey: "AIzaSyDBWYgCSW-XvDEliAm_cHFSg4LIv29joJw",
//     authDomain: "old-books-seller.firebaseapp.com",
//     databaseURL: "https://old-books-seller-default-rtdb.firebaseio.com",
//     projectId: "old-books-seller",
//     storageBucket: "old-books-seller.firebasestorage.app",
//     messagingSenderId: "696373662236",
//     appId: "1:696373662236:web:587ac6b5a46f544797c5d9",
//     measurementId: "G-VGLV0VPY4G"
// };

// Khoi tao firebase

// const app = firebase.initializeApp(firebaseConfig)
// Khoi tao noi chua du lieu web
// const database = firebase.database()

// Form elements
document.addEventListener("DOMContentLoaded", function () {
    const addForm = document.getElementById('add_form')
    const product_name = document.getElementById('product_name')
    const product_categorie = document.getElementById('product_categorie')
    const product_description = document.getElementById('product_description')
    const product_length = document.getElementById('product_length')
    const product_number_of_students = document.getElementById('product_number_of_students')
    const product_price = document.getElementById('product_price')
    const product_teacher = document.getElementById('product_teacher')
    const product_rate = document.getElementById('product_rate')
    const percentage_discount = document.getElementById('percentage_discount')
    const product_detailed_description = document.getElementById('product_detailed_description')
    const product_detailed_teacher = document.getElementById('product_detailed_teacher')
    const product_detailed_rate = document.getElementById('product_detailed_rate')
    const product_lessons = document.getElementById('product_lessons')
    const imageUpload = document.getElementById('filebutton')

    addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const addForm_value = addForm.value
        const product_name_value = product_name.value
        const product_categorie_value = product_categorie.value
        const product_description_value = product_description.value
        const product_length_value = product_length.value
        const product_number_of_students_value = product_number_of_students.value
        const product_price_value = product_price.value
        const product_teacher_value = product_teacher.value
        const product_rate_value = product_rate.value
        const percentage_discount_value = percentage_discount.value
        const product_detailed_description_value = product_detailed_description.value
        const product_detailed_teacher_value = product_detailed_teacher.value
        const product_detailed_rate_value = product_detailed_rate.value
        const product_lessons_value = product_lessons.value
        const imageUpload_value = imageUpload
        
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const imageData = reader.result
                // const newApartmentRef = database.ref('apartments').push()
                // newApartmentRef.set({
                //     name: name,
                //     price: price,
                //     description: description,
                //     image: imageData
                // }).then(() => {
                //     alert("Thêm sản phẩm thành công vào website")
                //     resetAddForm()
                //     displayApartment()
                // })
            }
            reader.readAsDataURL(image)
        }
        alert("done")
    })
});
// const updateForm = document.getElementById('updateForm')
// const updateName = document.getElementById('updateName')
// const updatePrice = document.getElementById('updatePrice')
// const updateDescription = document.getElementById('updateDescription')
// const updateImageUpload = document.getElementById('updateImageUpload')
// const apartmentList = document.getElementById('apartmentList')

//Them san pham vào firebase (add data to firebase)


// Reset khung thông tin thêm sản phẩm
// function resetAddForm() {
//     addForm.value = ""
//     product_name.value = ""
//     product_categorie.value = ""
//     product_description.value = ""
//     product_length.value = ""
//     product_number_of_students.value = ""
//     product_price.value = ""
//     product_teacher.value = ""
//     product_rate.value = ""
//     percentage_discount.value = ""
//     product_detailed_description.value = ""
//     product_detailed_teacher.value = ""
//     product_detailed_rate.value = ""
//     product_lessons.value = ""
//     imageUpload.value = ""
// }
// alert()

// Hiển thị sản phẩm lên màn hình
// function displayApartment() {
//     apartmentList.innerHTML = ""
//     database.ref('apartments').once('value', (snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//             const apartment = childSnapshot.val()
//             const apartmentDiv = document.createElement('div')
//             apartmentDiv.classList.add('apartment')
//             apartmentDiv.innerHTML = `
//                 <h4>${apartment.name}</h4>
//                 <p>${apartment.description}</p>
//                 <p>${apartment.price}</p>
//                 <img src = "${apartment.image}">
//                 <button onclick = "editApartment('${childSnapshot.key}')">Edit</button>
//                 <button onclick = "deleteApartment('${childSnapshot.key}')">Delete</button>
//             `
//             apartmentList.appendChild(apartmentDiv)
//         })
//     })
// }

// Kích hoạt chạy hàm hiển thị sản phẩm lên màn hình
// displayApartment()