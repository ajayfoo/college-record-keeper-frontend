import { getYearsOfAdmission } from '../../../../utils';
import './style.css';

const SearchText = () => {
  const searchTextEle = document.createElement('div');
  searchTextEle.classList.add('search-text');

  const searchTextBox = document.createElement('input');
  searchTextBox.type = 'text';
  searchTextBox.minLength = 1;
  searchTextBox.maxLength = 20;
  searchTextBox.id = 'search-textbox';

  const searchBtn = document.createElement('button');
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', () => {
    const searchStudentEvent = new CustomEvent('searchStudent', {
      detail: {
        firstName: searchTextBox.value,
        yearOfAdmission: document.getElementById('filter-year-select').value,
      },
    });
    window.dispatchEvent(searchStudentEvent);
  });

  searchTextEle.append(searchTextBox, searchBtn);
  return searchTextEle;
};

const FilterPlacementStatus = () => {
  const filterPlacementStatusEle = document.createElement('div');
  filterPlacementStatusEle.classList.add('filter-placement-status');
  filterPlacementStatusEle.classList.add('filter');

  const placementStatusLabel = document.createElement('p');
  placementStatusLabel.textContent = 'Placement Status';

  const placementStatusFlags = document.createElement('div');
  placementStatusFlags.classList.add('placement-status-flags');

  const placedFlag = document.createElement('input');
  placedFlag.type = 'radio';
  placedFlag.id = 'filter-placed-flag';
  placedFlag.name = 'placement-status';
  placedFlag.checked = true;

  const placementStatusFieldPlaced = document.createElement('div');
  placementStatusFieldPlaced.classList.add('placement-status-field');
  placementStatusFieldPlaced.appendChild(placedFlag);

  const notPlacedFlag = document.createElement('input');
  notPlacedFlag.type = 'radio';
  notPlacedFlag.id = 'filter-not-placed-flag';
  notPlacedFlag.name = 'placement-status';

  const placementStatusFieldNotPlaced = document.createElement('div');
  placementStatusFieldNotPlaced.classList.add('placement-status-field');
  placementStatusFieldNotPlaced.appendChild(notPlacedFlag);

  placementStatusFlags.append(
    placementStatusFieldPlaced,
    placementStatusFieldNotPlaced,
  );

  filterPlacementStatusEle.append(placementStatusLabel, placementStatusFlags);
  return filterPlacementStatusEle;
};

const FilterYearElement = async () => {
  const filterYearEle = document.createElement('div');
  filterYearEle.classList.add('filter-year');
  filterYearEle.classList.add('filter');

  const filterYearLabel = document.createElement('label');
  filterYearLabel.textContent = 'Year';
  filterYearLabel.setAttribute('for', 'filter-year-select');

  const filterYearSelect = document.createElement('select');
  filterYearSelect.id = 'filter-year-select';
  const emptyYear = document.createElement('option');
  emptyYear.textContent = 'Any';
  emptyYear.value = 0;
  emptyYear.selected = true;
  filterYearSelect.appendChild(emptyYear);
  const years = await getYearsOfAdmission();
  console.log(years);
  years.sort((a, b) => a - b);
  years.forEach((year) => {
    const opt = document.createElement('option');
    opt.textContent = year;
    opt.value = year;
    filterYearSelect.appendChild(opt);
  });

  window.addEventListener('newStudentBioAdded', async (event) => {
    const newYear = new Date(event.detail.yearOfAdmission).getFullYear();
    const yearOpts = filterYearSelect.querySelectorAll('option');
    if (years.includes(newYear)) return;
    years.push(newYear);
    const newYearOpt = document.createElement('option');
    newYearOpt.textContent = newYear;
    newYearOpt.value = newYear;
    for (let i = 1; i < yearOpts.length; ++i) {
      const year = parseInt(yearOpts[i].value);
      if (newYear < year) {
        filterYearSelect.insertBefore(newYearOpt, yearOpts[i]);
        return;
      }
    }
    filterYearSelect.appendChild(newYearOpt);
  });

  filterYearEle.append(filterYearLabel, filterYearSelect);

  return filterYearEle;
};

const SearchFilter = async () => {
  const searchFilterEle = document.createElement('div');
  searchFilterEle.classList.add('search-filter');

  const searchFilterHeading = document.createElement('h3');
  searchFilterHeading.textContent = 'Filters';

  const filterYearEle = await FilterYearElement();
  const filterPlacementStatusEle = FilterPlacementStatus();

  searchFilterEle.append(
    searchFilterHeading,
    filterYearEle,
    filterPlacementStatusEle,
  );

  return searchFilterEle;
};

const SearchRegion = async () => {
  const searchRegionEle = document.createElement('div');
  searchRegionEle.classList.add('search-region');
  const searchFilter = await SearchFilter();
  searchRegionEle.append(SearchText(), searchFilter);
  return searchRegionEle;
};

export default SearchRegion;
