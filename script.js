let checkbox = document.getElementById("checkbox");

window.addEventListener("load", function () {
  checkbox.checked = localStorage.getItem("lazarCheckbox") === "true";
  loadDarkTheme();
});

document.getElementById("checkbox").addEventListener("click", () => {
  localStorage.setItem("lazarCheckbox", checkbox.checked);

  loadDarkTheme();
});

function loadDarkTheme() {
  console.log({
    box: checkbox.checked,
    storage: localStorage.getItem("lazarCheckbox"),
  });
  if (checkbox.checked) {
    document.getElementById("checkbox").classList.remove("checked");
    document.getElementsByTagName("body")[0].classList.add("body");
  } else {
    document.getElementById("checkbox").classList.add("checked");
    document.getElementsByTagName("body")[0].classList.remove("body");
  }
}
