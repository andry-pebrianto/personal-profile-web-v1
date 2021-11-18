// Konfigurasi dan Inisialisasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWZMuCQqN8kzESujQQSZIucnInVrbja34",
  authDomain: "portfolio-157ff.firebaseapp.com",
  databaseURL:
    "https://portfolio-157ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-157ff",
  storageBucket: "portfolio-157ff.appspot.com",
  messagingSenderId: "546275473850",
  appId: "1:546275473850:web:edb608dfb1ebce0ea3c583",
};
firebase.initializeApp(firebaseConfig);
let db = firebase.database();
let messageRef = db.ref("message");

// All DOM Required
const captchaQuestion = document.getElementById("captchaQuestion");
const formContact = document.getElementById("formContact");
const formButton = document.getElementById("formButton");
const contactAlert = document.getElementById("contactAlert");
const captchaInput = document.getElementById("captchaInput");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Variabel untuk menyimpan pertanyaan
let question = [];

// Generate pertanyaan dan menampilkannya
createQuestion();

// Ketika form disubmit
formContact.addEventListener("submit", (e) => {
  e.preventDefault();

  // Jika jawaban captcha salah
  if (captchaInput.value != question[0] + question[1]) {
    alert("Jawaban Kamu Salah!");
  } else {
    // Mengubah button submit menjadi spinner dan disabled
    formButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`;
    formButton.setAttribute("disabled", true);

    // Generate pertanyaan baru dan menampilkannya
    createQuestion();

    // Mengumpulkan data yang diperlukan
    let data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      date: new Date().toDateString(),
    };

    // Menambahkan data ke firebase realtime database
    messageRef.push(data, (error) => {
      // Jika terjadi error
      if (error) {
        // Log error
        console.log(error);

        // Menampilkan alert error
        contactAlert.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              Maaf, tampaknya terjadi suatu kesalahan. Kami akan segera memerbaikinya.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
      } else {
        // Log pesan berhasil terkirim
        console.log("Message berhasil terkirim.");

        // Menampilkan alert success
        contactAlert.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              Terima kasih <strong>${
                data.name.split(" ")[0]
              }</strong>, pesan anda telah kami terima.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;

        // Mengosongkan input
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      }

      // Mengilangkan spinner dan disabled pada button submit
      formButton.innerText = "Submit";
      formButton.removeAttribute("disabled");

      // Scroll ke atas menuju #contact
      let a = document.createElement("a");
      a.setAttribute("href", "#contact");
      a.click();
    });
  }
});

// Menampilkan pertanyaan di DOM
function createQuestion() {
  question = [Math.floor(Math.random() * 51), Math.floor(Math.random() * 51)];
  captchaQuestion.innerText = `${question[0]} + ${question[1]} = `;
}
