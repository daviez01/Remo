const closeMenu = document.querySelector('.close-menu'),
      openMenu = document.querySelector('.open-menu'),
      dropDown = document.querySelector('.dropdown');



openMenu.addEventListener('click', showNav);

closeMenu.addEventListener('click', hideNav);

function showNav() {
    dropDown.classList.add('active')
    closeMenu.classList.add('active')
    openMenu.style.display = "none";
}

function hideNav() {
    dropDown.classList.remove('active');
    closeMenu.classList.remove('active');
    openMenu.style.display = "block";
}