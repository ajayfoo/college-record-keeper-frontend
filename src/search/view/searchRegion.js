const SearchText = () => {
  const searchTextEle = document.createElement('div');
  searchTextEle.classList.add('search-text-ele');

  const searchTextBox = document.createElement('input');
  searchTextBox.type = 'text';
  searchTextBox.minLength = 1;
  searchTextBox.maxLength = 20;

  const searchBtn = document.createElement('button');
  searchBtn.textContent = 'Search';

  searchTextEle.append(searchTextBox, searchBtn);
  return searchBtn;
};

const FilterPlacementStatus = () => {
  const filterPlacementStatusEle = document.createElement('div');
  filterPlacementStatusEle.classList.add('filter-placement-status');

  const placementStatusLabel = document.createElement('p');
  placementStatusLabel.textContent = 'Placement Status';

  const placementStatusFlags = document.createElement('div');
  placementStatusFlags.classList.add('placement-status-flags');

  const placedFlag = document.createElement('input');
  placedFlag.type = 'radio';
  placedFlag.id = 'filter-placed-flag';

  const placedFlagLabel = document.createElement('label');
  placedFlagLabel.textContent = 'Placed';
  placedFlagLabel.setAttribute('for', 'filter-placed-flag');

  const placementStatusFieldPlaced = document.createElement('div');
  placementStatusFieldPlaced.classList.add('placement-status-field');
  placementStatusFieldPlaced.appendChild(placedFlagLabel, placedFlag);

  const notPlacedFlag = document.createElement('input');
  notPlacedFlag.type = 'radio';
  notPlacedFlag.id = 'filter-not-placed-flag';

  const notPlacedFlagLabel = document.createElement('label');
  notPlacedFlagLabel.textContent = 'Not Placed';
  notPlacedFlagLabel.setAttribute('for', 'filter-not-placed-flag');

  const placementStatusFieldNotPlaced = document.createElement('div');
  placementStatusFieldNotPlaced.classList.add('placement-status-field');
  placementStatusFieldNotPlaced.appendChild(notPlacedFlagLabel, notPlacedFlag);

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

  const filterYearLabel = document.createElement('label');
  filterYearLabel.textContent = 'Year';
  filterYearLabel.setAttribute('for', 'filter-year-select');

  const filterYearSelect = document.createElement('select');
  filterYearSelect.id = 'fiter-year-select';

  const filterPlacementStatusEle = FilterPlacementStatus();

  filterYearEle.append(filterYearLabel, filterYearSelect);

  searchFilterEle.append(
    searchFilterEle,
    filterYearEle,
    filterPlacementStatusEle
  );

  return searchFilterEle;
};

const SearchRegion = () => {
  const searchRegionEle = document.createElement('div');
  searchRegionEle.classList.add('search-region');

  searchRegionEle.append(SearchText, SearchFilter());
  return searchRegionEle;
};

export default SearchRegion;
