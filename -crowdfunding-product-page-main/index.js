const bookmark = document.querySelector('.bookmark');
const subscribe = document.querySelector('.bookmark p');
const nav = document.querySelector('.navbar');
const navBtn = document.querySelector('.navbtn');
const closeBtn = document.querySelector('.closebtn');
const successModal = document.querySelector('.success-modal');
const showSuccess = document.querySelectorAll('.show-success');
const ctaRadio = document.querySelectorAll('input[type="radio"]')
const backProject = document.querySelector('.back-project');
const asideModal = document.querySelector('aside')

bookmark.addEventListener('click', (e) => {
    e.preventDefault();
    bookmark.classList.toggle('marked');

    if (bookmark.classList.contains('marked')) {
        subscribe.textContent = 'Bookmarked'
    } else {
        subscribe.textContent = 'Bookmark'
    }
})

navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('shownav');
    const togglebtn = navBtn.firstElementChild.classList;

    if (togglebtn.contains('fa-bars')) {
        togglebtn.replace('fa-bars', 'fa-times')
    } else {
        togglebtn.replace('fa-times', 'fa-bars')
    }
    
})

window.addEventListener ('resize', (e) => {
    if (window.innerWidth > 630) {
        nav.classList.remove('shownav');
    }
})

showSuccess.forEach((link) => {
    link.addEventListener('click', (e) => {
        successModal.classList.add('show-modal')
    })
})

ctaRadio.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        document.querySelectorAll('.modal .product').forEach((products) => {
            products.classList.remove('show-cta')
        })
        if (e.target.checked == true) {
            e.target.parentNode.parentNode.classList.add('show-cta')
        }
    })
})

backProject.addEventListener('click', (e) => {
    asideModal.classList.add('show-modal') 
})