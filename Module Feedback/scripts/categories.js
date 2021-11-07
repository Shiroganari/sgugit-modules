const buttonNewEntry = document.getElementById('button-entry');
const popupCategory = document.getElementById('popup-category');
const buttonClosePopup = document.getElementById('popup-close');
const popupCategoryTitle = document.getElementById('popup__category-title');
const popupUserType = document.getElementById('popup__user-type');
const categoriesTable = document.getElementById('categories-table');
const popupNewEntry = document.getElementById('popup__new-entry');

buttonNewEntry.addEventListener('click', () => {
    popupCategory.classList.add('active');
})

buttonClosePopup.addEventListener('click', () => {
    popupCategory.classList.remove('active');
})

popupNewEntry.addEventListener('click', () => {
    let title = popupCategoryTitle.value;
    let userType = popupUserType.options[popupUserType.selectedIndex].text;
    let tableBody = categoriesTable.children[1];
    var newRow = tableBody.insertRow(tableBody.rows.length);
    newRow.classList = "feedback-table__row";
    newRow.innerHTML = `<td class='feedback-table__type'>${userType}</td><td class='feedback-table__title'>${title}</td><td class='feedback-table__themes-count'>0</td><td class='feedback-table__actions'><a class="feedback-table__edit" href="#">Удалить</a><a class="feedback-table__edit" href="#">Редактировать</a></td>`;
})



// FILTERS
const filter = document.getElementById('user-type');
const filtersButton = document.getElementById('filters-button');

filtersButton.addEventListener('click', () => {
    let value = filter.value;
    let userType = filter.options[filter.selectedIndex].text;
    const tableRows = document.querySelectorAll('.feedback-table__type');
    for (let i = 0; i < tableRows.length; i++) {
        let typeText = tableRows[i].innerHTML;
        let row = tableRows[i].parentNode;

        if (value == 'all') {
            row = row.style.display = "table-row"
        } else if (typeText != userType) {
            row = row.style.display = "none"
        } else {
            row = row.style.display = "table-row"
        }
    }
})