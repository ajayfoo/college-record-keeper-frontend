import './style.css';
import ExportIconSrc from './images/export.svg';
import EditIconSrc from './images/edit.svg';
import DeleteIconSrc from './images/delete.svg';

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
  exportBtn.classList.add('export');
  const exportIcon = document.createElement('img');
  exportIcon.src = ExportIconSrc;
  exportBtn.appendChild(exportIcon);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  const editIcon = document.createElement('img');
  editIcon.src = EditIconSrc;
  editBtn.appendChild(editIcon);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  const deleteIcon = document.createElement('img');
  deleteIcon.src = DeleteIconSrc;
  deleteBtn.appendChild(deleteIcon);

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
