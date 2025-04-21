export function initializeDropdown() {
  const dropdownTrigger = document.querySelector("#dropdown-trigger");
  const dropdownContent = document.querySelector(".dropdown");

  dropdownTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("triggered");
  });

  return "initialized!";
}
