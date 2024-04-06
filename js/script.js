"use strict";

const submitButton = document.getElementById("submitButton");
const validateFormText = document.querySelector(".validateFormText");
const emailInput = document.getElementById("emailInput");
const mainContainer = document.querySelector(".main-container");
const successContainer = document.querySelector(".success-container");
const dismissButton = document.getElementById("dismissButton");
const mediaQuery = window.matchMedia("(min-width: 720px)");
const bannerImg = document.getElementById("banner-img");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    validateFormText.textContent = "";
    emailInput.classList.remove("inputError");
  } else {
    validateFormText.textContent = "Valid email required";
    emailInput.classList.add("inputError");
  }
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailInput.validity.valid) {
    mainContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
  }
});

dismissButton.addEventListener("click", function (e) {
  e.preventDefault();
  mainContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
});

function mediaQueryChanged(mq) {
  if (mq.matches) {
    // La media query se aplica, cambiamos el src de la imagen
    bannerImg.src = "./assets/images/illustration-sign-up-desktop.svg"; // Cambia "imagen-small.jpg" por la ruta de tu imagen pequeña
  } else {
    // La media query no se aplica, restauramos el src original de la imagen
    bannerImg.src = "./assets/images/illustration-sign-up-mobile.svg"; // Cambia "imagen.jpg" por la ruta de tu imagen original
  }
}

// Llama a la función una vez para establecer el estado inicial
mediaQueryChanged(mediaQuery);

// Registra un listener para el cambio en la media query
mediaQuery.addListener(mediaQueryChanged);
