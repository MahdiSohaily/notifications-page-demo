const markRead = document.querySelector('.read');
const unread = document.querySelectorAll('.active');

markRead.addEventListener('click', () => {
  unread.forEach((elem) => {
    elem.classList.remove('active');
  });
});

unread.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.target.classList.remove('active')
  });
});
