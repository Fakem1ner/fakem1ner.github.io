let popupButtons = document.querySelectorAll('[data-popup-open]');
let popups = document.querySelectorAll('[data-popup]');
let popupCloses = document.querySelectorAll('.popup__close');

popupCloses.forEach(popupClose => {
    popupClose.setAttribute('data-tip', 'Закрыть')
});

popupButtons.forEach(popupButton => {
    popupButton.addEventListener('click', function() {
        popups.forEach(popup => {
            if(popup.getAttribute('data-popup') == popupButton.getAttribute('data-popup-open')) {
                popup.classList.toggle('_popup-open')
            }
        });
    });
});