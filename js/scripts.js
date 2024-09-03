// Modals
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelectorAll('.close-modal');
const modal = document.querySelectorAll('.modal');

// when the open-modal button is clicked, display the corresponding modal
openModal.forEach((button,i) => {
    button.addEventListener('click', () => {
        modal[i].showModal();
    })
});

//close modal when the close-modal button is clicked
closeModal.forEach((button,i) => {
    button.addEventListener('click', () => {
        modal[i].close();
    })
});

// Navigation menu - highlight the current section
let sections = document.querySelectorAll('section');
let menuItems = document.querySelectorAll('.navigation-list__item');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if(top >= offset && top < offset + height) {
            menuItems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navigation-list__item[href*=' + id +']').classList.add('active');
            });
        };
    });
};