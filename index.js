function toggleMobileMenu() {
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
    document.getElementById("intro-section").classList.toggle("blur-intro-section")
}

function openDropdownItem(menuElement, menuLink) {
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
    menuElement.href= menuLink
}

const form = document.querySelector('.contact-form-content');
const email = document.querySelector('.contact-form-email');
const error = document.querySelector('.contact-form-email + span.error')
const upperCaseCheck = () => {
    if (email.value !== email.value.toLowerCase()) {
      return true;
    }
    return false;
  };

email.addEventListener('input', () => {
    if(email.validity.valid && !upperCaseCheck()){
        error.textContent = ''
        error.className = 'error'
    }
})