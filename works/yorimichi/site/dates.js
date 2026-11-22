const day = document.querySelector("#day");
const preview = document.querySelector("#preview");
const dialog = document.querySelector("#date-dialog");
const chosenDay = document.querySelector("#chosen-day");

function updatePreview() {
  preview.disabled = !day.value;
}

day.addEventListener("change", updatePreview);
window.addEventListener("pageshow", updatePreview);
preview.addEventListener("click", () => {
  chosenDay.textContent = day.value;
  dialog.showModal();
});
