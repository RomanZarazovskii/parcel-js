import { saveFormData } from "./form-data.js";

const form = document.querySelector('.feedback__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;

    const name = formElements.name.value;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        name, email, message
    };

    saveFormData(formData);

    window.alert('Feedback submitted successfully!');

    form.reset();
});