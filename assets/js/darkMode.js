let darkModeCheckbox = document.getElementById("darkModeCheckbox");

// Cek localstorage
if (localStorage.getItem("theme") === "dark") {
  darkModeCheckbox.setAttribute("checked", "checked");
  darkModeCheckbox.nextElementSibling.innerText = "Dark";

  // Toggle untuk menambahkan/menghapus class bernama dark pada body
  document.body.classList.toggle("dark-theme");

  darkTheme();
}

// Menanamkan event
darkModeCheckbox.addEventListener("change", setDarkMode);

// Fungsi untuk merngubah darkmode/lightmode
function setDarkMode() {
  // Toggle untuk menambahkan/menghapus class bernama dark pada body
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
    darkModeCheckbox.nextElementSibling.innerText = "Light";

    lightTheme();
  } else {
    localStorage.setItem("theme", "dark");
    darkModeCheckbox.nextElementSibling.innerText = "Dark";

    darkTheme();
  }
}

function darkTheme() {
  // Mengubah section menjadi dark
  document.querySelectorAll(".pure").forEach((element) => {
    element.classList.remove("pure-light");
    element.classList.add("pure-light-dark");
  });
  document.querySelectorAll(".semi").forEach((element) => {
    element.classList.remove("semi-light");
    element.classList.add("semi-light-dark");
  });

  // Mengubah about image menjadi dark
  document
    .getElementById("aboutImage1")
    .setAttribute("src", "./assets/img/about2.webp");
  document
    .getElementById("aboutImage2")
    .setAttribute("src", "./assets/img/about-dark.webp");

  // Mengubah card menjadi dark
  document.querySelectorAll(".card").forEach((element) => {
    element.classList.toggle("card-dark");
  });
  // Mengubah contact form menjadi dark
  document.getElementById("formContact").classList.toggle("contact-form-dark");
}

function lightTheme() {
  // Mengubah section menjadi light
  document.querySelectorAll(".pure").forEach((element) => {
    element.classList.remove("pure-light-dark");
    element.classList.add("pure-light");
  });
  document.querySelectorAll(".semi").forEach((element) => {
    element.classList.remove("semi-light-dark");
    element.classList.add("semi-light");
  });

  // Mengubah about image menjadi light
  document
    .getElementById("aboutImage1")
    .setAttribute("src", "./assets/img/about.webp");
  document
    .getElementById("aboutImage2")
    .setAttribute("src", "./assets/img/about2.webp");

  // Mengubah card menjadi light
  document.querySelectorAll(".card").forEach((element) => {
    element.classList.toggle("card-dark");
  });
  // Mengubah contact form menjadi light
  document.getElementById("formContact").classList.toggle("contact-form-dark");
}
