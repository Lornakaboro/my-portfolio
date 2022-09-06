function toggleMobileMenu() {
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
}


function openDropdownItem(menuElement, menuLink) {
    // toggleMobileMenu()
    document.getElementById("nav-dropdown-menu").classList.toggle("hidden-dropdown-menu")
    menuElement.href= menuLink
}





