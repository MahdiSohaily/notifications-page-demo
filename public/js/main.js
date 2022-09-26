const markRead = document.querySelector('.read');
const unread = document.querySelectorAll('.active');

markRead.addEventListener('click', () => {
    unread.forEach( elem => {
        elem.classList.remove('active');
    }
})