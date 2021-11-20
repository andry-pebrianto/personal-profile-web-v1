// Fixer For Scrollspy Refresh Problem
function hotfixScrollSpy() {
  var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
  );
  let curScroll = getCurrentScroll();
  dataSpyList.forEach(function (dataSpyEl) {
    let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)["_offsets"];
    for (let i = 0; i < offsets.length; i++) {
      offsets[i] += curScroll;
    }
  });
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

window.onload = function () {
  hotfixScrollSpy();
  window.scrollBy(0, 1);
};
