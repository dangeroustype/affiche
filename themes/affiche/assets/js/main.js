// main script
(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", (event) => {
    let menuToggleButton = document.getElementById('menuToggleButton');
    let mobileMenu = document.getElementById('mobileMenu');
    let menuToggle = document.getElementById('menuToggle');
    let menuClose = document.getElementById('menuClose')
    console.log('loaded hello');
    menuToggleButton.addEventListener("click", function(event) {
        menuToggle.classList.remove('hidden');
        mobileMenu.classList.remove('hidden');
    });

        menuClose.addEventListener("click", function(event) {
        menuToggle.classList.add('hidden');
    });

    });
})();