const dropdownsData = [
  { title: "Dryers", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Washing Machines", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Air Conditioners", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Microwave Ovens", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Freezers", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Wall Ovens", options: ["Option 1", "Option 2", "Option 3"] },
  { title: "Exercise Machines", options: ["Option 1", "Option 2", "Option 3"] },
];

function createDropdown(title, options) {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown-container");

  const dropdownButton = document.createElement("button");
  dropdownButton.classList.add("dropdown-button");
  dropdownButton.textContent = title;
  dropdownContainer.appendChild(dropdownButton);

  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");
  dropdownMenu.style.display = "none";

  options.forEach((option) => {
    const optionLink = document.createElement("a");
    optionLink.href = "#";
    optionLink.textContent = option;

    optionLink.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.style.display = "none";
    });

    dropdownMenu.appendChild(optionLink);
  });

  dropdownButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.style.display === "block";

    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });

    dropdownMenu.style.display = isOpen ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });

  dropdownContainer.appendChild(dropdownMenu);
  return dropdownContainer;
}

window.addEventListener("resize", renderDropdowns);

window.addEventListener("DOMContentLoaded", renderDropdowns);

function renderDropdowns() {
  const container = document.getElementById("dropdowns-container");
  container.innerHTML = "";

  dropdownsData.forEach((data) => {
    const dropdown = createDropdown(data.title, data.options);
    container.appendChild(dropdown);
  });

  const viewAllButton = document.createElement("button");
  viewAllButton.classList.add("dropdown-button", "view-all-button");
  viewAllButton.textContent = "View All";

  viewAllButton.addEventListener("click", () => {
    console.log("View All clicked");
  });

  container.appendChild(viewAllButton);
}
