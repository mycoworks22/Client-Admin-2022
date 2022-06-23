function companiesLiveSearch() {

  //before a name search is performed make sure no status filter is applied
  document.getElementById('filter-btn-all').checked = true;


  // get all the companies
  let companies_list = document.querySelector('#companies-list-wrap');
  let companies = companies_list.querySelectorAll('.company');

  //search input value
  let search_value = document.getElementById("search-companies-input").value.toLowerCase();

  //loop through all the comapnies within the company list
  for (let i = 0; i < companies.length; i++) {
    let company_name_container = companies[i].querySelector('.company__name');
    let company_name = company_name_container.innerText.toLowerCase();

    // if the name matches the search query remove the d-none, if it doesn't add class d-none
    if(company_name.includes(search_value)) {
      companies[i].classList.remove("d-none");
    }else{
      companies[i].classList.add("d-none");
    }
  }
}

// A little delay
let live_search_typing_timer;
let live_search_type_interval = 300;
let live_search_input = document.getElementById('search-companies-input');

live_search_input.addEventListener('keyup', () => {
  clearTimeout(live_search_typing_timer);
  live_search_typing_timer = setTimeout(companiesLiveSearch, live_search_type_interval);
});