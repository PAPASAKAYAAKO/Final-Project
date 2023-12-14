const FullNameInput = document.getElementById("FullNameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const dobInput = document.getElementById("dobInput");
const formProgress = document.getElementById('formProgress');

function ProgressBar() {
  const inputFields = [FullNameInput, ageInput, emailInput, dobInput];
  let validFieldCount = 0;

 
  for (const inputField of inputFields) {
    if (inputField.classList.contains("is-valid")) {
      validFieldCount++;
    }
  }

  const progress = (validFieldCount / inputFields.length) * 100;

 
  formProgress.style.width = progress + "%";
  formProgress.setAttribute('aria-valuenow', progress);
  formProgress.textContent = progress + " %";
}




FullNameInput.addEventListener("input", function () {
  const inputValue = FullNameInput.value.trim();

  if (inputValue === "" || inputValue.length < 8) {
    FullNameInput.classList.remove("is-valid");
    FullNameInput.classList.add("is-invalid");
  } else {
    FullNameInput.classList.remove("is-invalid");
    FullNameInput.classList.add("is-valid");
  }
  ProgressBar();
});



ageInput.addEventListener("input", function () {
  const inputValue = ageInput.value;

  if (isNaN(inputValue) || inputValue < 1) {
    ageInput.classList.remove("is-valid");
    ageInput.classList.add("is-invalid");
  } else {
    ageInput.classList.remove("is-invalid");
    ageInput.classList.add("is-valid");
  }
  ProgressBar();
});



emailInput.addEventListener("input", function () {
  const inputValue = emailInput.value.trim();
  const emailPattern = /^[\w\.-]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;

  if (!emailPattern.test(inputValue)) {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }
  ProgressBar();
});



dobInput.addEventListener("input", function () {
  const inputValue = dobInput.value.trim();

  if (inputValue === "") {
    dobInput.classList.remove("is-valid");
    dobInput.classList.add("is-invalid");
  } else {
    dobInput.classList.remove("is-invalid");
    dobInput.classList.add("is-valid");
  }
  ProgressBar();
});
