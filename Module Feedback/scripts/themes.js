const buttonNewEntry = document.getElementById('button-entry');
const popupTheme = document.getElementById('popup-theme');
const buttonClosePopup = document.getElementById('popup-close');
const popupUserType = document.getElementById('popup__user-type');
const popupCategory = document.getElementById('popup__category-type');
const popupThemeTitle = document.getElementById('popup__theme-title');
const categoriesTable = document.getElementById('categories-table');
const popupNewEntry = document.getElementById('popup__new-entry');

buttonNewEntry.addEventListener('click', () => {
    popupTheme.classList.add('active');
})

buttonClosePopup.addEventListener('click', () => {
    popupTheme.classList.remove('active');
})

popupNewEntry.addEventListener('click', () => {
    let themeTitle = popupThemeTitle.value;
    let userType = popupUserType.options[popupUserType.selectedIndex].text;
    let category = popupCategory.options[popupCategory.selectedIndex].text;
    let tableBody = categoriesTable.children[1];
    var newRow = tableBody.insertRow(tableBody.rows.length);
    newRow.classList = "feedback-table__row";
    newRow.innerHTML = `
    <td class="feedback-table__user-type">${userType}</td>
    <td class="feedback-table__category">${category}</td>
    <td class="feedback-table__theme">${themeTitle}</td>
    <td class="feedback-table__actions">
        <a class="feedback-table__edit" href="#">Удалить</a>
        <a class="feedback-table__edit" href="#">Редактировать</a>
    </td>`
})



// FILTERS
const filterUserType = document.getElementById('filter__user-type');
const filterCategory = document.getElementById('filter__category')
const filtersButton = document.getElementById('filters-button');

filtersButton.addEventListener('click', () => {
    let filterUserType = filterUserType.options[filterUserType.selectedIndex].text;
    let filterCategory = filterCategory.options[filterCategory.selectedIndex].text;
    const tableRows = document.querySelectorAll('.feedback-table__row');
    for (let i = 0; i < tableRows.length; i++) {
        let tableUserType = tableRows.children[0];
        let tableCategory = tableRows.children[1];
        let row = tableRows[i].parentNode;

        if (tableUserType == filterUserType && tableCategory0 == filterCategory) {
            row = row.style.display = "table-row"
        } else if (typeText != userType) {
            row = row.style.display = "none"
        } else {
            row = row.style.display = "table-row"
        }
    }
})