let darkModeCheckbox = document.getElementById("darkModeCheckbox");

// Cek localstorage
if (localStorage.getItem("theme") === "dark") {
  darkModeCheckbox.setAttribute("checked", "checked");
  darkModeCheckbox.nextElementSibling.innerText = "Dark Theme";

  // Toggle untuk menambahkan/menghapus class bernama dark pada body
  document.body.classList.toggle("dark-theme");

  // Mengubah section menjadi dark
  document.querySelectorAll(".pure").forEach((element) => {
    element.classList.remove("pure-light");
    element.classList.add("pure-light-dark");
  });
  document.querySelectorAll(".semi").forEach((element) => {
    element.classList.remove("semi-light");
    element.classList.add("semi-light-dark");
  });

  // Mengubah card menjadi dark
  document.querySelectorAll(".card").forEach((element) => {
    element.classList.toggle("card-dark");
  });
}

// Menanamkan event
darkModeCheckbox.addEventListener("change", setDarkMode);

// Fungsi untuk darkmode
function setDarkMode() {
  // Toggle untuk menambahkan/menghapus class bernama dark pada body
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
    darkModeCheckbox.nextElementSibling.innerText = "Light Theme";

    // Mengubah section menjadi light
    document.querySelectorAll(".pure").forEach((element) => {
      element.classList.remove("pure-light-dark");
      element.classList.add("pure-light");
    });
    document.querySelectorAll(".semi").forEach((element) => {
      element.classList.remove("semi-light-dark");
      element.classList.add("semi-light");
    });

    // Mengubah card menjadi light
    document.querySelectorAll(".card").forEach((element) => {
      element.classList.toggle("card-dark");
    });
  } else {
    localStorage.setItem("theme", "dark");
    darkModeCheckbox.nextElementSibling.innerText = "Dark Theme";

    // Mengubah section menjadi dark
    document.querySelectorAll(".pure").forEach((element) => {
      element.classList.remove("pure-light");
      element.classList.add("pure-light-dark");
    });
    document.querySelectorAll(".semi").forEach((element) => {
      element.classList.remove("semi-light");
      element.classList.add("semi-light-dark");
    });

    // Mengubah card menjadi dark
    document.querySelectorAll(".card").forEach((element) => {
      element.classList.toggle("card-dark");
    });
  }
}
