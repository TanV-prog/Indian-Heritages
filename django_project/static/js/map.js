// Indian Heritage — Leaflet OpenStreetMap Interactive Handler
document.addEventListener('DOMContentLoaded', function() {
  const mapElement = document.getElementById('full-heritage-map');
  if (!mapElement || typeof L === 'undefined') return;

  const map = L.map('full-heritage-map', {
    center: [21.8, 80.5],
    zoom: 5,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors | Indian Heritage Archive',
    maxZoom: 18
  }).addTo(map);

  const markersData = [
    {
      id: '1',
      name: 'Kalamkari Hand-Drawn Textiles',
      category: 'crafts',
      categoryLabel: 'Local Crafts',
      state: 'Andhra Pradesh',
      location: 'Srikalahasti, Tirupati',
      lat: 13.7498,
      lng: 79.6984,
      desc: 'Ancient bamboo kalam drawing and 17-step natural mineral & river washing dye process.'
    },
    {
      id: '2',
      name: 'Navadhanya Dryland Farming',
      category: 'farming',
      categoryLabel: 'Traditional Farming',
      state: 'Telangana',
      location: 'Zaheerabad, Sangareddy',
      lat: 17.6805,
      lng: 77.6148,
      desc: 'Drought-hardy nine-crop intercropping with native seed preservation and zero irrigation.'
    },
    {
      id: '3',
      name: 'Kondapalli Softwood Carvings',
      category: 'crafts',
      categoryLabel: 'Local Crafts',
      state: 'Andhra Pradesh',
      location: 'Kondapalli, NTR District',
      lat: 16.6186,
      lng: 80.5367,
      desc: 'Softwood village occupational toys assembled with tamarind paste and vegetable dyes.'
    },
    {
      id: '4',
      name: 'Pochampally Tie-and-Dye Ikat',
      category: 'crafts',
      categoryLabel: 'Local Crafts',
      state: 'Telangana',
      location: 'Bhoodan Pochampally',
      lat: 17.3457,
      lng: 78.8152,
      desc: 'Double-ikat geometric tie-dye handloom with heritage Telia Rumal oil conditioning.'
    },
    {
      id: '5',
      name: 'Johad Traditional Rain Dams',
      category: 'indigenous',
      categoryLabel: 'Indigenous Knowledge',
      state: 'Rajasthan',
      location: 'Thanagazi, Alwar',
      lat: 27.553,
      lng: 76.6346,
      desc: 'Crescent earthen check dams replenishing ancient underground desert aquifers.'
    },
    {
      id: '6',
      name: 'Burrakatha Oral Ballad Tradition',
      category: 'folklore',
      categoryLabel: 'Folklore & Stories',
      state: 'Andhra Pradesh & Telangana',
      location: 'Guntur & Warangal',
      lat: 16.3067,
      lng: 80.4365,
      desc: 'Triadic musical storytelling performance featuring the tambura and clay gummeta percussion.'
    },
    {
      id: '7',
      name: 'Theyyam Sacred Ritual Performance',
      category: 'arts',
      categoryLabel: 'Folk Arts',
      state: 'Kerala',
      location: 'Payyanur, Kannur',
      lat: 12.0991,
      lng: 75.2014,
      desc: 'Towering palm headdresses, natural face heraldry, and sacred grove fire dancing.'
    }
  ];

  let currentLayerGroup = L.layerGroup().addTo(map);

  function updateSidebar(data) {
    const card = document.getElementById('map-marker-card');
    if (!card) return;

    card.innerHTML = `
      <span class="info-kicker">${data.categoryLabel} · ${data.state}</span>
      <h3 style="font-size: 22px; margin: 6px 0 10px;">${data.name}</h3>
      <p style="font-size: 13px; color: #8A735A; margin-bottom: 12px;">📍 ${data.location}</p>
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">${data.desc}</p>
      <div style="font-size: 11px; color: #8A735A; margin-bottom: 16px;">
        GPS: ${data.lat.toFixed(4)}° N, ${data.lng.toFixed(4)}° E
      </div>
      <a href="/tradition/${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/" class="btn-primary" style="display: block; text-align: center;">View Detailed Dossier →</a>
    `;
  }

  function renderMarkers(categoryFilter) {
    currentLayerGroup.clearLayers();

    markersData.forEach(function(item) {
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return;
      }

      const marker = L.marker([item.lat, item.lng]).addTo(currentLayerGroup);

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif;">
          <strong style="color: #35443A; font-size: 14px;">${item.name}</strong><br>
          <span style="font-size: 12px; color: #5F806B;">${item.categoryLabel} · ${item.state}</span>
        </div>
      `);

      marker.on('click', function() {
        updateSidebar(item);
      });
    });
  }

  renderMarkers('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.map-filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderMarkers(cat);
    });
  });
});
