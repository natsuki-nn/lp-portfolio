const preview = document.querySelector("#booking-preview");
const openPreview = document.querySelector("#open-preview");
const slot = document.querySelector("#slot");
const slotStatus = document.querySelector("#slot-status");

openPreview.addEventListener("click", () => preview.showModal());

slot.addEventListener("change", () => {
  slotStatus.textContent = slot.value ? `選択した体験枠：${slot.value}` : "";
});
