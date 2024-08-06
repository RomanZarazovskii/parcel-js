const form = document.querySelector('.feedback__form');
const button = document.querySelector('.feedback__button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        message: form.querySelector('#message')
    };

    localStorage.setItem('feedback', JSON.stringify(formData));
})