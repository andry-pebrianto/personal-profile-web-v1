window.onscroll = () => {
  scrollFunction();
};

// Scroll Handler
function scrollFunction() {
  let navbarTogglerStatus = document
    .querySelector(".navbar-toggler")
    .classList.contains("collapsed");

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
      changeNavbarDark();
    } else {
      changeNavbarTransparent();
    }
  }
}

// Click Handler
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
  document.getElementById("navbar").classList.add("bg-darkblue");
}

function changeNavbarTransparent() {
  document.getElementById("navbar").classList.remove("bg-darkblue");
  document.getElementById("navbar").classList.add("bg-transparent");
}
