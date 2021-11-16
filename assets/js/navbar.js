window.onscroll = () => {
  scrollFunction();
};

// Jika halaman discroll
function scrollFunction() {
  let navbarTogglerStatus = document
    .querySelector(".navbar-toggler")
    .classList.contains("collapsed");

  console.log(navbarTogglerStatus);

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
      changeNavbarDark();
    } else {
      changeNavbarTransparent();
    }
  }
}

// Jika tombol hamburger ditekan
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let navbarTogglerStatus = document
    .querySelector(".navbar-toggler")
    .classList.contains("collapsed");

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
    } else {
      changeNavbarTransparent();
    }
  } else {
    changeNavbarDark();
  }
});

function changeNavbarDark() {
  document.getElementById("navbar").classList.remove("bg-transparent");
  document.getElementById("navbar").classList.add("bg-dark");
}

function changeNavbarTransparent() {
  document.getElementById("navbar").classList.remove("bg-dark");
  document.getElementById("navbar").classList.add("bg-transparent");
}
