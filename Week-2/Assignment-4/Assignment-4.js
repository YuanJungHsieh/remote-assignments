const welcomeMessage = document.querySelector(".welcome");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const box2 = document.querySelector(".box2");

welcomeMessage.addEventListener("click", () => {
  h1.textContent = "Have a Good Time!";
});

button.addEventListener("click", () => {
  box2.style.display = "flex";
});
