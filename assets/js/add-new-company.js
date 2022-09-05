function newCompanyTypeBox() {
  const boxes = document.querySelectorAll('.new-company-type-box');
  const form = document.getElementById('new-company-form-wrap');

  boxes.forEach(box => {
    const radioBtn = box.querySelector("input[type='radio']");

    radioBtn.addEventListener("click", function(){
      boxes.forEach(box => {
        box.style.borderColor = "white";
      });
      box.style.borderColor = "#5ABA5E";

      form.classList.add("d-block");
      form.classList.remove("d-none");

    });

  });
}

newCompanyTypeBox();


function newCompanyLocationBox() {
  const boxes = document.querySelectorAll('.new-company-location-box');

  boxes.forEach(box => {
    const radioBtn = box.querySelector("input[type='radio']");

    radioBtn.addEventListener("click", function(){
      boxes.forEach(box => {
        box.style.borderColor = "white";
      });
      box.style.borderColor = "#5ABA5E";
    });

  });
}

newCompanyLocationBox();