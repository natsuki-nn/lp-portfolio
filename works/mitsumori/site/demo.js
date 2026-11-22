const filter = document.querySelector("#status-filter");
const rows = [...document.querySelectorAll("#demo-table [data-status]")];
const shown = document.querySelector("#shown");
const requestForm = document.querySelector("#request-form");
const topic = document.querySelector("#topic");
const chosenTopic = document.querySelector("#chosen-topic");
const requestPreview = document.querySelector("#request-preview");

function filterRows() {
  for (const row of rows) {
    row.hidden = Boolean(filter.value && row.dataset.status !== filter.value);
  }
  shown.textContent = `${rows.filter(row => !row.hidden).length}件を表示`;
}

filter.addEventListener("change", filterRows);
window.addEventListener("pageshow", filterRows);
requestForm.addEventListener("submit", event => {
  event.preventDefault();
  chosenTopic.textContent = `関心のあるテーマ：${topic.value}`;
  requestPreview.showModal();
});
