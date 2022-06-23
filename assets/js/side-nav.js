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