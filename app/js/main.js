//active buttons
const headerBtns = document.querySelectorAll('.header__btn');
headerBtns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('active-btn');
    })
})


//mobile menu
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
})