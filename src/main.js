const dropdownTrigger = document.querySelector("#dropdown-trigger");
const dropdownContent = document.querySelector(".dropdown");

dropdownTrigger.addEventListener("click", () => {
  dropdownContent.classList.toggle("triggered");
});
