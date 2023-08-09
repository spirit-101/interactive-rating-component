"use strict";
const ratingContainer = document.querySelector(".rating-buttons");
const ratingBtns = document.querySelectorAll(".rating-button");
const btnSubmit = document.querySelector(".submit-btn");

const stepRating = document.querySelector(".step__rating");
const stepComplete = document.querySelector(".step__complete");

const ratingSpan = document.querySelector(".step__complete-rating");

let rating;

ratingContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".rating-button");
  if (!btn) return;

  rating = btn.dataset.rating;

  ratingBtns.forEach((btn) => btn.classList.remove("rating-button--active"));
  btn.classList.add("rating-button--active");
});

btnSubmit.addEventListener("click", function () {
  if (!rating) return;
  stepRating.classList.add("hidden");
  stepComplete.classList.remove("hidden");

  ratingSpan.textContent = `You selected ${rating} out of 5`;
});
