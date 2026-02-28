// forme.js

// Example JavaScript code for form validation and interactivity

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting
        if (!validateInput(inputField.value)) {
            errorMessage.textContent = 'Please enter a valid input.';
            errorMessage.style.color = 'red';
        } else {
            errorMessage.textContent = '';
            // Submit form or perform further actions
            console.log('Form submitted successfully!');
        }
    });

    function validateInput(value) {
        // Basic validation: check for empty input
        return value && value.trim() !== '';
    }
});
