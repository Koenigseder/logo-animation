const container = document.querySelector(".container");

const rows = container.querySelectorAll(".row");
const lastRow = rows[rows.length - 1];
lastRow.addEventListener("animationend", () => {
  container.classList.add("pulsing");

  container.addEventListener("click", () => {
    container.classList.add("slide");
  });
});
