function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  })addTo(mymap);
  console.log('mymap', mymap)
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  console.log('window loaded');
  const form = document.querySelector('.userform');
  const search = document.querySelector('#city');
  const suggestions = document.querySelector('.suggestions');  

  const results = [];
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const data = await request.json();
 
  console.log(data);

  search.addEventListener('input', (event) => {
      console.log('input', event.target.value);
  });
  
  function findMatches(wordToMatch, cities) {
      return cities.filter(place => {
          // here we need to figure out if the city on state matches what was searched
          const regex = new RegExp(wordToMatch, 'gi');
          return place.city.match(regex) || place.state.match(regex)
      });
  }

  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayMatches(event) {
      const matchArray = findMatches(event.target.value, data);
      const html = matchArray.map(place => {
          const regex = new RegExp(event.target.value, 'gi');
          const cityName = place.city.replace(regex, '<span class="hl">${event.target.value}</span>')
          const stateName = place.state.replace(regex, '<span class="hl">${event.target.value}</span>')
          return `           
              <div class="box">
                  <li>
                      <span class="title">${place.name}</span>
                  </li>
                  <li>
                      <span class="category">${place.category}</span>
                  </li>
                  <li>
                      <span class="address">${place.address_line_1}</span>
                  </li>
                  <li>
                      <span class="location">${place.city}, ${place.state}</span>
                  </li>
                  <li>
                      <span class="zipcode">${place.zip}</span>
                  </li>
              </div>           
          `;
      }).join('');
      suggestions.innerHTML = html;
  
  }

  
  search.addEventListener('change', displayMatches);
  search.addEventListener('keyup', (event) => { 
      displayMatches(event)
  });

}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;