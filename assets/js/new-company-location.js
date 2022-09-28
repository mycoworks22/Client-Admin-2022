function newCompanyLocation () {

  // get all radio btns
  const radioLnd = document.getElementById('new-company-location-lnd');
  const radioEd = document.getElementById('new-company-location-ed');
  const radioIpsw = document.getElementById('new-company-location-ipsw');

  if (radioLnd.checked){
    window.location.replace("/new-company-lnd.html");
    // window.location.replace("/Client-Admin-2022/new-company-lnd.html");
  }
  else if (radioEd.checked){
    window.location.replace("/new-company-ed.html");
  }
  else{
    window.location.replace("/new-company-ipsw.html");
  }
}