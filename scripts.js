document.getElementById("scrollLeft").addEventListener("click", function () {
  let menuWrapper = document.querySelector(".menu-mobile-wrapper");
  menuWrapper.scrollLeft -= 100; // Você pode ajustar o valor para rolar mais ou menos
});

document.getElementById("scrollRight").addEventListener("click", function () {
  let menuWrapper = document.querySelector(".menu-mobile-wrapper");
  menuWrapper.scrollLeft += 100; // Você pode ajustar o valor para rolar mais ou menos
});

document.getElementById("showModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
