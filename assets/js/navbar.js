window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").classList.remove("bg-transparent");
    document.getElementById("navbar").classList.add("bg-dark");
  } else {
    document.getElementById("navbar").classList.remove("bg-dark");
    document.getElementById("navbar").classList.add("bg-transparent");
  }
}
