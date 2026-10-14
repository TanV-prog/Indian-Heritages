'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HeritageEntry } from '@/lib/heritage-data';
import { MapPin, Layers, ExternalLink, Filter, Users, BookOpen } from 'lucide-react';

interface HeritageMapProps {
  entries: HeritageEntry[];
  onSelectEntry: (entry: HeritageEntry) => void;
}

const REGIONAL_MAP_MARKERS = [
  {
    id: 'telangana-millet',
    name: 'Navadhanya Dryland Millet Farming',
    category: 'farming',
    categoryLabel: 'Traditional Farming',
    state: 'Telangana',
    location: 'Pastapur & Zaheerabad, Sangareddy',
    lat: 17.6805,
    lng: 77.6148,
    preservationStatus: 'at_risk',
    statusLabel: '🟠 At Risk',
    knowledgeHolders: '28 Elders',
    learningAvailable: true,
    description: 'Drought-hardy nine-crop intercropping with native seed preservation and zero groundwater irrigation.',
    entryId: '1',
  },
  {
    id: 'andhra-kalamkari',
    name: 'Srikalahasti Natural Dye Kalamkari',
    category: 'crafts',
    categoryLabel: 'Crafts',
    state: 'Andhra Pradesh',
    location: 'Srikalahasti, Tirupati',
    lat: 13.7498,
    lng: 79.6984,
    preservationStatus: 'declining',
    statusLabel: '🟡 Declining',
    knowledgeHolders: '42 Artisans',
    learningAvailable: true,
    description: 'Bamboo quill drawing, myrobalan mordanting, and 17-step river water washing craft.',
    entryId: '2',
  },
  {
    id: 'andhra-burrakatha',
    name: 'Burra Katha Oral Ballad Storytelling',
    category: 'folklore',
    categoryLabel: 'Oral Traditions',
    state: 'Andhra Pradesh & Telangana',
    location: 'Guntur & Warangal',
    lat: 16.3067,
    lng: 80.4365,
    preservationStatus: 'endangered',
    statusLabel: '🔴 Critically At Risk',
    knowledgeHolders: '11 Elders',
    learningAvailable: true,
    description: 'Three-person musical storytelling ballad theatre facing severe transmission disruption.',
    entryId: '3',
  },
  {
    id: 'andhra-kondapalli',
    name: 'Kondapalli Softwood Carvings',
    category: 'crafts',
    categoryLabel: 'Crafts',
    state: 'Andhra Pradesh',
    location: 'Kondapalli, NTR District',
    lat: 16.6186,
    lng: 80.5367,
    preservationStatus: 'at_risk',
    statusLabel: '🟠 At Risk',
    knowledgeHolders: '31 Artisans',
    learningAvailable: true,
    description: 'Lightweight village occupational figurines carved from wild Tella Poniki softwood.',
    entryId: '4',
  },
  {
    id: 'rajasthan-johad',
    name: 'Johad Indigenous Rainwater Harvesting',
    category: 'indigenous',
    categoryLabel: 'Indigenous Knowledge',
    state: 'Rajasthan',
    location: 'Thanagazi, Alwar',
    lat: 27.553,
    lng: 76.6346,
    preservationStatus: 'thriving',
    statusLabel: '🟢 Thriving',
    knowledgeHolders: '65 Masters',
    learningAvailable: true,
    description: 'Crescent earthen check dams replenishing ancient subterranean desert aquifers.',
    entryId: '5',
  },
  {
    id: 'kerala-theyyam',
    name: 'Theyyam Sacred Grove Ritual Theatre',
    category: 'arts',
    categoryLabel: 'Folk Arts',
    state: 'Kerala',
    location: 'Payyanur, Kannur',
    lat: 12.0991,
    lng: 75.2014,
    preservationStatus: 'declining',
    statusLabel: '🟡 Declining',
    knowledgeHolders: '52 Custodians',
    learningAvailable: true,
    description: 'Towering palm headdresses, natural herbal face heraldry, and sacred grove fire dancing.',
    entryId: '6',
  },
  {
    id: 'gujarat-rogan',
    name: 'Rogan Castor Gel Painting',
    category: 'crafts',
    categoryLabel: 'Crafts',
    state: 'Gujarat',
    location: 'Nirona, Kutch',
    lat: 23.4077,
    lng: 69.5884,
    preservationStatus: 'endangered',
    statusLabel: '🔴 Critically At Risk',
    knowledgeHolders: '4 Artisans',
    learningAvailable: true,
    description: '48-hour boiled castor oil paste trailed aerially with a blunt brass stylus onto silk without touching fabric.',
    entryId: '7',
  },
  {
    id: 'assam-majuli',
    name: 'Majuli Vaishnavite Bamboo Mask Craft',
    category: 'arts',
    categoryLabel: 'Folk Arts',
    state: 'Assam',
    location: 'Natun Samaguri Satra, Majuli Island',
    lat: 26.9667,
    lng: 94.2167,
    preservationStatus: 'at_risk',
    statusLabel: '🟠 At Risk',
    knowledgeHolders: '16 Monks',
    learningAvailable: true,
    description: 'Sub-kilogram theatrical masks sculpted from split river bamboo and Brahmaputra silt.',
    entryId: '8',
  },
  {
    id: 'kashmir-pashmina',
    name: 'Kashmir Pashmina & Sozni Needlecraft',
    category: 'crafts',
    categoryLabel: 'Crafts',
    state: 'Jammu & Kashmir',
    location: 'Old City, Srinagar',
    lat: 34.0837,
    lng: 74.7973,
    preservationStatus: 'endangered',
    statusLabel: '🔴 Critically At Risk',
    knowledgeHolders: '22 Masters',
    learningAvailable: true,
    description: 'Hand-carded Changthangi underdown woven on pit looms and embroidered with 0.5mm silver needles.',
    entryId: '9',
  },
  {
    id: 'kerala-pokkali',
    name: 'Pokkali Saline Tidal Rice Farming',
    category: 'farming',
    categoryLabel: 'Traditional Farming',
    state: 'Kerala',
    location: 'Kadamakkudy, Ernakulam',
    lat: 10.0467,
    lng: 76.2422,
    preservationStatus: 'declining',
    statusLabel: '🟡 Declining',
    knowledgeHolders: '38 Farmers',
    learningAvailable: true,
    description: 'Submerged 2.5-meter tall saline-resilient rice rotating seasonally with tidal prawn culture.',
    entryId: '10',
  },
  {
    id: 'tamilnadu-toda',
    name: 'Toda Indigenous Buffalo Lore & Pukhoor',
    category: 'indigenous',
    categoryLabel: 'Indigenous Knowledge',
    state: 'Tamil Nadu',
    location: 'Muthunad Mund, Nilgiris',
    lat: 11.4102,
    lng: 76.695,
    preservationStatus: 'endangered',
    statusLabel: '🔴 Critically At Risk',
    knowledgeHolders: '14 Elders',
    learningAvailable: true,
    description: 'Sacred dairy temple chants and counted-thread red-and-black wool embroidery on coarse unbleached cotton.',
    entryId: '11',
  },
  {
    id: 'maharashtra-warli',
    name: 'Warli Indigenous Wall Painting & Tarpa',
    category: 'folklore',
    categoryLabel: 'Oral Traditions',
    state: 'Maharashtra',
    location: 'Dahanu & Jawhar, Palghar',
    lat: 19.9703,
    lng: 72.73,
    preservationStatus: 'declining',
    statusLabel: '🟡 Declining',
    knowledgeHolders: '42 Elders',
    learningAvailable: true,
    description: 'Minimalist geometric muraling with rice flour paste and sacred communal Tarpa wind music.',
    entryId: '12',
  },
];

export default function HeritageMap({ entries, onSelectEntry }: HeritageMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [activeMarkerData, setActiveMarkerData] = useState<any | null>(null);

  const isClient = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const MAP_CATEGORY_FILTERS = [
    { id: 'all', label: 'All Heritage' },
    { id: 'farming', label: '🌾 Farming Knowledge' },
    { id: 'crafts', label: '🧵 Crafts' },
    { id: 'arts', label: '🎭 Folk Arts' },
    { id: 'folklore', label: '📖 Oral Traditions' },
    { id: 'indigenous', label: '🌿 Indigenous Knowledge' },
  ];

  const STATUS_FILTERS = [
    { id: 'all', label: 'All Statuses' },
    { id: 'thriving', label: '🟢 Thriving' },
    { id: 'declining', label: '🟡 Declining' },
    { id: 'at_risk', label: '🟠 At Risk' },
    { id: 'endangered', label: '🔴 Critically At Risk' },
  ];

  const filteredMarkers = React.useMemo(() => {
    return REGIONAL_MAP_MARKERS.filter((m) => {
      const matchCat = selectedFilter === 'all' || m.category === selectedFilter;
      const matchStatus = selectedStatusFilter === 'all' || m.preservationStatus === selectedStatusFilter;
      return matchCat && matchStatus;
    });
  }, [selectedFilter, selectedStatusFilter]);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    let map = mapInstanceRef.current;

    import('leaflet').then((L) => {
      if (!map) {
        map = L.map(mapContainerRef.current!, {
          center: [21.8, 80.5],
          zoom: 5,
          minZoom: 4,
          maxZoom: 10,
          scrollWheelZoom: false,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors | Indian Heritage Archive',
          maxZoom: 18,
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      const createCustomIcon = (status: string) => {
        let pinColor = '#5F806B';
        if (status === 'endangered') pinColor = '#992626';
        else if (status === 'at_risk') pinColor = '#b85b28';
        else if (status === 'declining') pinColor = '#9c711a';

        return L.divIcon({
          className: 'custom-heritage-marker',
          html: `
            <div style="
              width: 28px;
              height: 28px;
              background-color: ${pinColor};
              border: 2px solid #FAF7F0;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 2px 8px rgba(53,68,58,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            ">
              <div style="
                width: 9px;
                height: 9px;
                background-color: #FAF7F0;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 28],
          popupAnchor: [0, -28],
        });
      };

      filteredMarkers.forEach((marker) => {
        const leafletMarker = L.marker([marker.lat, marker.lng], {
          icon: createCustomIcon(marker.preservationStatus),
        }).addTo(map);

        leafletMarker.on('click', () => {
          setActiveMarkerData(marker);
        });
      });
    });

    return () => {
      // Retain instance
    };
  }, [isClient, filteredMarkers]);

  const handleExploreMarker = (marker: any) => {
    const matched = entries.find((e) => e.id === marker.entryId) || entries[0];
    onSelectEntry(matched);
  };

  return (
    <section id="map-section" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E8D8BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5F806B] font-bold mb-3">
              <Layers className="w-4 h-4 text-[#5F806B]" />
              <span>Living Heritage Map</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35443A] font-semibold tracking-tight">
              India Living Heritage Map
            </h2>
            <p className="mt-2 text-base text-[#35443A]/85 max-w-2xl">
              Geographic monitoring of traditional knowledge transmission, active knowledge holders, and preservation vulnerability across regions.
            </p>
          </div>

          <div className="text-xs text-[#8A735A] font-medium">
            <span>OpenStreetMap Engine · Zero Commercial API Keys</span>
          </div>
        </div>

        {/* Dual Filter Bars */}
        <div className="mb-6 space-y-3">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#8A735A] mr-1">Category:</span>
            {MAP_CATEGORY_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-xs border transition-colors cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-[#5F806B] text-[#FAF7F0] border-[#5F806B] shadow-xs'
                    : 'bg-[#FAF7F0] text-[#35443A] border-[#E8D8BD] hover:border-[#8FAF9A]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#8A735A] mr-1">Preservation Status:</span>
            {STATUS_FILTERS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStatusFilter(s.id)}
                type="button"
                className={`px-2.5 py-1 text-xs font-medium rounded-xs border transition-colors cursor-pointer ${
                  selectedStatusFilter === s.id
                    ? 'bg-[#35443A] text-[#FAF7F0] border-[#35443A] shadow-xs'
                    : 'bg-[#FAF7F0] text-[#35443A] border-[#E8D8BD] hover:border-[#8FAF9A]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Map Canvas */}
          <div className="lg:col-span-8 relative">
            <div
              ref={mapContainerRef}
              className="w-full h-[450px] sm:h-[540px] rounded-xs border border-[#E8D8BD] overflow-hidden shadow-xs relative"
              style={{ minHeight: '450px' }}
            >
              {!isClient && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#FAF7F0] text-xs text-[#8A735A]">
                  Loading Living Heritage Geographical Map...
                </div>
              )}
            </div>

            <div className="mt-2.5 flex items-center justify-between text-xs text-[#8A735A]">
              <span>💡 Click colored pins to inspect localized continuity health.</span>
              <span>Showing {filteredMarkers.length} regional traditions</span>
            </div>
          </div>

          {/* Active Marker Continuity Inspector */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="h-full p-6 bg-[#FAF7F0] border border-[#E8D8BD] rounded-xs flex flex-col justify-between shadow-2xs">
              {activeMarkerData ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8A735A] mb-1 font-medium">
                      <span className="uppercase tracking-wider font-semibold text-[#5F806B]">
                        {activeMarkerData.categoryLabel}
                      </span>
                      <span>{activeMarkerData.state}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#35443A] leading-snug">
                      {activeMarkerData.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8A735A]">
                      <MapPin className="w-3.5 h-3.5 text-[#5F806B]" />
                      <span>{activeMarkerData.location}</span>
                    </div>
                  </div>

                  {/* Continuity Data Box */}
                  <div className="p-3 bg-[#F8F4EC] rounded-xs border border-[#E8D8BD] space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#8A735A]">Preservation Status:</span>
                      <strong className="font-semibold">{activeMarkerData.statusLabel}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A735A]">Knowledge Holders:</span>
                      <strong className="text-[#5F806B] font-semibold">{activeMarkerData.knowledgeHolders}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A735A]">Learning Module:</span>
                      <strong className="text-[#2e6945]">
                        {activeMarkerData.learningAvailable ? '✓ Ready to Learn' : 'In Progress'}
                      </strong>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#35443A]/85 leading-relaxed pt-2 border-t border-[#E8D8BD]/70">
                    {activeMarkerData.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => handleExploreMarker(activeMarkerData)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] bg-[#5F806B] hover:bg-[#4d6957] rounded-xs transition-colors shadow-xs"
                    >
                      <span>View Continuity Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8D8BD]/40 text-[#5F806B] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#35443A]">
                    Select a Region on the Map
                  </h4>
                  <p className="text-xs text-[#8A735A] leading-relaxed max-w-xs">
                    Click any marker across Telangana, Rajasthan, Kerala, Nagaland, or Bengal to inspect transmission vitality.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#E8D8BD]/70 text-[11px] text-[#8A735A] flex items-center justify-between">
                <span>Living Heritage Geographic Atlas</span>
                <span className="italic">Preservation Continuity Prototype</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
