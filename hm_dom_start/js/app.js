  document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })




  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const cityListItem = createCityListItem(event.target);
    const cityList = document.querySelector('#cities-list');
    cityList.appendChild(cityListItem);

    event.target.reset();
  }



  const createCityListItem = function (form) {
    const cityListItem = document.createElement('li');
    cityListItem.classList.add('cities-list-item');

    const city = document.createElement('h2');
    city.textContent = form.city.value;
    cityListItem.appendChild(city);

    const country = document.createElement('h3');
    country.textContent = form.country.value;
    cityListItem.appendChild(country);

    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    cityListItem.appendChild(continent);

    return cityListItem;
  }



  const handleDeleteAllClick = function (event) {
    const citiesList = document.querySelector('#cities-list');
    citiesList.innerHTML = '';
  }
