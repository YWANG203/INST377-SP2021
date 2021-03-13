const { fromPairs } = require("cypress/types/lodash");

async function windowActions() {
    const form = document.querySelector('.userform');
    const search = document.querySelector('#city');
    const suggestions = document.querySelector('.suggestions');

    const request = await fetch('/api');
    const data = await request.json();

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        const filtered = data.filter((record) => record.zip.includes(search.value));
        filtered.forEach((item) => {
            const longLat = item.geocoded_column1.coordinates;
            console.log('markerLongLat', longLat[0], longLat[1]);
            const marker = L.marker([longLat[1], longLat[0]]).addTo(mapFromMapFunction);

            const appendItem = document.createElement('li');
            appendItem.classList.add('block');
            appendItem.classList.add('list_item');
            appendItem.innerHTML = `<div class="list-header is-size-5">${item.name}</div><address class="is-size-6>${item.address_line_1}</address>`;
            targetList.append(appendItem);
        });
    });
}