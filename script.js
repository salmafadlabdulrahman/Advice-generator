let adviceNum = document.querySelector(".advice-num");
let advice = document.querySelector(".advice");
const btn = document.querySelector(".btn-container");


btn.addEventListener("click", function () {
  generateAdvice();
});


async function generateAdvice() {
  const response = await fetch(
    "https://api.adviceslip.com/advice"
  );

  let data = await response.json();
  const adviceId = data.slip.id;
  const theAdvice = data.slip.advice;

  adviceNum.textContent = `Advice #${adviceId}`;
  advice.textContent = `"${theAdvice}"`;
}
