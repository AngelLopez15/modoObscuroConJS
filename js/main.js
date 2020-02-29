const btnSwtch = document.querySelector('#switch');

btnSwtch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwtch.classList.toggle('active');
});