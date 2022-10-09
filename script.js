const container = document.querySelector(".container");

container.addEventListener("click", () => {
  container.classList.add("slide");
  const rows = container.querySelectorAll(".row");
  const lastRow = rows[rows.length - 1];
  lastRow.addEventListener("animationend", () => {
    console.log("Here");
  });
});
