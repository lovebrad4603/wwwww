(function() {

    var button = document.getElementById('cn-button'),
        container = document.getElementById('cn-container'),
        overlay = document.getElementById('cn-overlay');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler() {
        if (!open) {
            this.innerHTML = "X";
            classie.add(container, 'opened-nav');
            classie.add(button, 'opened-btn');
            classie.add(overlay, 'cn-overlay');
        } else {
            this.innerHTML = "Menu";
            classie.remove(container, 'opened-nav');
            classie.remove(button, 'opened-btn');
            classie.remove(overlay, 'cn-overlay');
        }
        open = !open;
    }

    function closeContainer() {
        classie.remove(container, 'opened-nav');
    }

})();