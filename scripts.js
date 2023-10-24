document.getElementById("scrollLeft").addEventListener("click", function () {
  let menuWrapper = document.querySelector(".menu-mobile-wrapper");
  menuWrapper.scrollLeft -= 100; // Você pode ajustar o valor para rolar mais ou menos
});

document.getElementById("scrollRight").addEventListener("click", function () {
  let menuWrapper = document.querySelector(".menu-mobile-wrapper");
  menuWrapper.scrollLeft += 100; // Você pode ajustar o valor para rolar mais ou menos
});

document.getElementById("showModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("load", function () {
  let splashScreen = document.getElementById("splash-screen");
  splashScreen.style.display = "none";
  document.body.style.overflow = "auto"; // Restaurar a rolagem
});

const path = "users.json";

fetch(path)
  .then((response) => response.json())
  .then((data) => {
    const usersListContainer = document.querySelector(".users-list");

    const firstTenUsers = data.users.slice(0, 10);

    firstTenUsers.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      const loginSpan = document.createElement("span");
      loginSpan.classList.add("name");
      loginSpan.innerText = user.login;

      const prizeSpan = document.createElement("span");
      prizeSpan.classList.add("prize");
      prizeSpan.innerText = user.valor;

      userDiv.appendChild(loginSpan);
      userDiv.appendChild(prizeSpan);

      usersListContainer.appendChild(userDiv);
    });
  });

fetch(path)
  .then((response) => response.json())
  .then((data) => {
    const usersListContainer = document.querySelector(".users-list-modal");

    data.users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user-2");

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("name");
      nameSpan.innerText = user.login;

      const prizeSpan = document.createElement("span");
      prizeSpan.classList.add("prize");
      prizeSpan.innerText = user.valor;

      userDiv.appendChild(nameSpan);
      userDiv.appendChild(prizeSpan);

      usersListContainer.appendChild(userDiv);
    });
  });
