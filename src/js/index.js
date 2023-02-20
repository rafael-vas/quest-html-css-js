const fields = document.querySelectorAll(".field");
const requiredTexts = document.querySelectorAll(".required-text");

for (let i = 0; i <= fields.length - 1; i++) {
  fields[i].addEventListener("change", () => {
    if (fields[i].value === "") {
      if (fields[i].classList.contains("correct")) {
        fields[i].classList.remove("correct");
      }

      fields[i].classList.add("required");
      requiredTexts[i].classList.remove("hidden");
    } else if (fields[i].value !== "") {
      fields[i].classList.add("correct");
      requiredTexts[i].classList.add("hidden");
    }
  });
}
