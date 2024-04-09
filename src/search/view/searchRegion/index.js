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
    placementStatusFieldNotPlaced
  );

  filterPlacementStatusEle.append(placementStatusLabel, placementStatusFlags);
  return filterPlacementStatusEle;
};

const SearchFilter = () => {
  const searchFilterEle = document.createElement('div');
  searchFilterEle.classList.add('search-filter');

  const searchFilterHeading = document.createElement('h3');
  searchFilterHeading.textContent = 'Filters';

  const filterYearEle = document.createElement('div');
  filterYearEle.classList.add('filter-year');
  filterYearEle.classList.add('filter');

  const filterYearLabel = document.createElement('label');
  filterYearLabel.textContent = 'Year';
  filterYearLabel.setAttribute('for', 'filter-year-select');

  const filterYearSelect = document.createElement('select');
  filterYearSelect.id = 'filter-year-select';

  const filterPlacementStatusEle = FilterPlacementStatus();

  filterYearEle.append(filterYearLabel, filterYearSelect);

  searchFilterEle.append(
    searchFilterHeading,
    filterYearEle,
    filterPlacementStatusEle
  );

  return searchFilterEle;
};

const SearchRegion = () => {
  const searchRegionEle = document.createElement('div');
  searchRegionEle.classList.add('search-region');

  searchRegionEle.append(SearchText(), SearchFilter());
  return searchRegionEle;
};

export default SearchRegion;
