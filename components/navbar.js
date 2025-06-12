// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
const mobileNavMenu = document.getElementById('mobileNavMenu');
const overlay = document.getElementById('overlay');
const mobileSearch = document.getElementById('mobileSearch');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
const mobileMenuNavBtn = document.getElementById('mobileMenuNavBtn');

function closeAllMenus() {
    mobileSidebar.classList.remove('active');
    mobileNavMenu.classList.remove('active');
    overlay.classList.remove('active');
    mobileSearch.classList.remove('active');
}

mobileMenuBtn.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileSidebar.classList.remove('active');
    mobileSearch.classList.remove('active');
});

mobileSidebarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileNavMenu.classList.remove('active');
    mobileSearch.classList.remove('active');
});

mobileMenuNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileNavMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileSidebar.classList.remove('active');
    mobileSearch.classList.remove('active');
});

mobileSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSearch.classList.toggle('active');
    mobileSidebar.classList.remove('active');
    mobileNavMenu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', closeAllMenus);

// Mobile dropdown functionality
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-title');
mobileDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const parent = dropdown.parentElement;
        parent.classList.toggle('active');

        const icon = dropdown.querySelector('i');
        if (parent.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Close menus when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1200) {
        if (
            !e.target.closest('.navbar') &&
            !e.target.closest('.mobile-sidebar') &&
            !e.target.closest('.mobile-nav-menu') &&
            !e.target.closest('.mobile-search') &&
            !e.target.closest('.mobile-nav-right')
        ) {
            closeAllMenus();
        }
    }
});