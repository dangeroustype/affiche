// main script
(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", (event) => {
    const menuToggleButton = document.getElementById('menuToggleButton');
    const mobileMenu = document.getElementById('mobileMenu');
    console.log('loaded hello');
    menuToggleButton.addEventListener("click", function(event) {
        console.log('clicked');
        event.preventDefault();
        mobileMenu.classList.remove('hidden');
        console.log(mobileMenu);
    });

    });
})();