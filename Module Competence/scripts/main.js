// Верхнее меню с элементами выбора таблиц компетенций
let href;
const buttons = document.getElementsByClassName('competence-menu__link');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
        href = buttons[i].href;
    });
}

// Управление popup-окнами добавления компетенций
const showPopup = document.getElementById('showPopup');
const popupAll = document.getElementById('popup-all');
const popupCodes = document.getElementById('popup-codes');
const popupContent = document.getElementById('popup-content');
const popupResults = document.getElementById('popup-results');
const popupTypes = document.getElementById('popup-types');
const closeButton = document.getElementsByClassName('close-btn');
const saveButton = document.getElementsByClassName('save-btn');

showPopup.addEventListener('click', function () {
    if (href.includes('competence-all'))
        popupAll.classList.add('show');
    else if (href.includes('competence-codes'))
        popupCodes.classList.add('show')
    else if (href.includes('competence-content'))
        popupContent.classList.add('show')
    else if (href.includes('competence-results'))
        popupResults.classList.add('show')
    else if (href.includes('competence-types'))
        popupTypes.classList.add('show')
});

for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function () {
        if (href.includes('competence-all'))
            popupAll.classList.remove('show');
        else if (href.includes('competence-codes'))
            popupCodes.classList.remove('show')
        else if (href.includes('competence-content'))
            popupContent.classList.remove('show')
        else if (href.includes('competence-results'))
            popupResults.classList.remove('show')
        else if (href.includes('competence-types'))
            popupTypes.classList.remove('show')
    });
}