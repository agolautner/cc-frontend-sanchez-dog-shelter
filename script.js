function loadEvent() {
    console.log('the document has loaded');

    document.getElementById('hamburger').addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        const navList = document.getElementById('nav-list');
        navList.classList.toggle('show');
    }

    const navItems = document.getElementsByClassName('nav-item');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', closeSidebar)
    }

    function closeSidebar() {
        const navList = document.getElementById('nav-list');
        navList.classList.remove('show');
    }
}

window.addEventListener('load', loadEvent);