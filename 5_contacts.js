function validateForm() {
    // Clear existing error messages
    clearErrorMessages();

    // First Name validation
    const firstName = document.getElementById('firstName').value.trim();
    if (!isNaN(firstName) || firstName.length < 3) {
        displayErrorMessage('firstName', "First Name must be a string with at least 3 characters.");
        return false;
    }

    // Last Name validation
    const lastName = document.getElementById('lastName').value.trim();
    if (!isNaN(lastName) || lastName.length < 3) {
        displayErrorMessage('lastName', "Last Name must be a string with at least 3 characters.");
        return false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    if (!email.endsWith("@gmail.com")) {
        displayErrorMessage('email', "Email must end with '@gmail.com'.");
        return false;
    }

    // Phone Number validation
    const phone = document.getElementById('phone').value.trim();
    if (isNaN(phone) || phone.length < 1) {
        displayErrorMessage('phone', "Phone Number must be numeric.");
        return false;
    }

    // Inquiry validation
    const inquiryElements = document.getElementsByName('inquiry');
    let inquirySelected = false;
    for (const element of inquiryElements) {
        if (element.checked) {
            inquirySelected = true;
            break;
        }
    }
    if (!inquirySelected) {
        displayErrorMessage('inquiry', "Please select a valid inquiry type.");
        return false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const words = message.split(' ').filter(word => word !== '');
    if (words.length < 3) {
        displayErrorMessage('message', "Message must contain at least 3 words.");
        return false;
    }

    // All validations passed
    return true;
}

// Function to display error messages
function displayErrorMessage(inputId, errorMessage) {
    const inputField = document.getElementById(inputId);
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = errorMessage;
    
    // Insert error message below the input field
    inputField.parentNode.insertBefore(errorContainer, inputField.nextSibling);
}

// Function to clear all error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => errorMessage.remove());
}
