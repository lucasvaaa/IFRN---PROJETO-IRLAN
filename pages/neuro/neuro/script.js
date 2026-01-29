const sidebar = document.getElementById("sidebar");
const toggleBtnOpen = document.getElementById("toggleBtnOpen");

toggleBtnOpen.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
