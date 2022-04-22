const nav = document.querySelector('nav');
const header_content = document.querySelector('#header_content');
const navToggle = document.querySelector('.nav-toggle');
const menuIcons = document.querySelectorAll('.icons');
// const close_icon = document.querySelector('#close_icon');
const hamburger_icon = document.querySelector('#hamburger_icon');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    header_content.classList.toggle('hidden');
    menuIcons.forEach((icon) => {
        icon.classList.toggle('hidden');
    })
})

// if window is resized when mobile menu is open, 
// close the mobile nav and render desktop layout
window.addEventListener(
    "resize", () => {
        // alert('resized');
        if (window.innerWidth > 500) {
            nav.classList.remove('open')
            header_content.classList.remove('hidden');
            menuIcons.forEach((icon) => {
                icon.classList.add("hidden");
            });
            hamburger_icon.classList.remove("hidden");
        }
    }
);