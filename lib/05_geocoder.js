const formElement = document.getElementById('searchbar');


formElement.addEventListener('submit', (event) => {
  // prevent form's default behavior
  event.preventDefault();
  // get input value
  const address = document.getElementById('address').value;
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
    .then(response => response.json())
    .then(data => {
      //get lat & lng in data
      const lat = data['results'][0]['geometry']['location']['lat'];
      const lng = data['results'][0]['geometry']['location']['lng'];
      //insert values in html
      const paragraphe = document.getElementById('coordinates');
      paragraphe.insertAdjacentHTML('afterbegin', `latitude: ${lat}`);
      paragraphe.insertAdjacentHTML('beforeend', `longitude: ${lng}`);
    });
});
