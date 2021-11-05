function loadEvent() {
    console.log('the document has loaded');

    document.getElementById('hamburger').addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        const navList = document.getElementById('nav-list');
        navList.classList.toggle('show');
    }
}

window.addEventListener('load', loadEvent);