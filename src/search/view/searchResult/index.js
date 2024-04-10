import './style.css';

const SearchResultHeader = () => {
  const searchResultHeaderEle = document.createElement('div');
  searchResultHeaderEle.classList.add('search-result-header');

  const selectAllField = document.createElement('div');
  selectAllField.classList.add('select-all-field');

  const selectAllCheckbox = document.createElement('input');
  selectAllCheckbox.type = 'checkbox';
  selectAllCheckbox.id = 'search-result-select-all';

  const selectAllCheckboxLabel = document.createElement('label');
  selectAllCheckboxLabel.setAttribute('for', selectAllCheckbox.id);
  selectAllCheckboxLabel.textContent = 'Select All';

  selectAllField.append(selectAllCheckbox, selectAllCheckboxLabel);

  const actionButtons = document.createElement('div');
  actionButtons.classList.add('action-buttons');

  const exportBtn = document.createElement('button');
  exportBtn.textContent = 'Export';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  actionButtons.append(exportBtn, editBtn, deleteBtn);

  searchResultHeaderEle.append(selectAllField, actionButtons);
  return searchResultHeaderEle;
};
const SearchResult = () => {
  const searchResultEle = document.createElement('div');
  searchResultEle.classList.add('search-result');
  searchResultEle.append(SearchResultHeader());
  return searchResultEle;
};

export default SearchResult;
