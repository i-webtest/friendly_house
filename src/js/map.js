const map = L.map('map').setView([55.848271, 37.37536], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([55.848271, 37.37536]).addTo(map).bindPopup('Friendly House - приют для животных').openPopup();
