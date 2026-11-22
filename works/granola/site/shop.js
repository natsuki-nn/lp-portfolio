const quantity = document.querySelector("#quantity");
const dialog = document.querySelector("#order-dialog");
const summary = document.querySelector("#order-summary");

document.querySelector("#preview").addEventListener("click", () => {
  const bags = Number(quantity.value);
  summary.textContent = `${bags}袋（合計 ${bags * 200} g）`;
  dialog.showModal();
});
