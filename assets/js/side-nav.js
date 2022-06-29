// function to open and close the side nav
const side_nav_open_close = () => {
  const side_nav = document.querySelector('#side-nav');
  const side_nav_btn = document.querySelector('#side-nav-burger');

  const side_nav_links_list = document.querySelector('#side-nav-links-list');

  side_nav_btn.addEventListener('click',() => {

    if (side_nav.classList.contains('side-nav--opened')) {
      side_nav.classList.remove('side-nav--opened');
      side_nav.classList.add('side-nav--closed');
    }
    else {
      side_nav.classList.add('side-nav--opened');
      side_nav.classList.remove('side-nav--closed');
    }

  });
}
side_nav_open_close();


// finction to slide the nav on mobile
const side_nav_slide_in = () => {
  const side_nav = document.querySelector('#side-nav');
  const top_nav_btn = document.querySelector('#top-nav-burger');
  const side_nav_btn = document.querySelector('#side-nav-burger-mobile');


  top_nav_btn.addEventListener('click',() => {
    side_nav.style.transform = "translateX(0%)";
  });

  side_nav_btn.addEventListener('click',() => {
    side_nav.style.transform = "translateX(-100%)";
  });
}
side_nav_slide_in();

// on load check screen size and if between the selected size range close the nav
window.addEventListener('load', (event) => {
    let window_inner_width = window.innerWidth;
    const side_nav_btn = document.querySelector('#side-nav-burger');

    if(window_inner_width < 768 && window_inner_width > 576){
      side_nav_btn.click();
    }

});

// on resize check screen size and if between the selected size range close the nav
window.addEventListener('resize', (event) => {
  let window_inner_width = window.innerWidth;
  const side_nav_btn = document.querySelector('#side-nav-burger');
  const side_nav = document.querySelector('#side-nav');

  if(window_inner_width < 768 && window_inner_width > 575){
    if (side_nav.classList.contains('side-nav--opened')){
      side_nav_btn.click();
    }
    side_nav.style.transform = "translateX(0%)";
  }
  else if(window_inner_width < 576){
    side_nav.classList.add('side-nav--opened');
    side_nav.classList.remove('side-nav--closed');
    side_nav.style.transform = "translateX(-100%)";
  }
  else if(window_inner_width > 767){
    side_nav.classList.add('side-nav--opened');
    side_nav.classList.remove('side-nav--closed');
    side_nav.style.transform = "translateX(0%)";
  }

});