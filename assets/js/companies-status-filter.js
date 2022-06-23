function companiesFilterBtns(radio_btn) {

  //before applying the filter clear the name search input
  let search_input = document.getElementById("search-companies-input");
  search_input.value = '';

  // get the value of the selected button
  let radio_btn_value = radio_btn.value;
  console.log(radio_btn_value);

  // get all the companies
  let companies_list = document.querySelector('#companies-list-wrap');
  let companies = companies_list.querySelectorAll('.company');

  //loop through all the comapnies within the company list
  for (let i = 0; i < companies.length; i++) {

    // if the class list contains the radio button value remove the d-none, if it doesn't add class d-none
    if(companies[i].classList.contains(radio_btn_value)) {
      companies[i].classList.remove("d-none");
    }else{
      companies[i].classList.add("d-none");
    }
  }
}