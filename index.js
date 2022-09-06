function toggleMobileMenu() {
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
    document.getElementById("intro-section").classList.toggle("blur-intro-section")
}

function openDropdownItem(menuElement, menuLink) {
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
    menuElement.href= menuLink
}

