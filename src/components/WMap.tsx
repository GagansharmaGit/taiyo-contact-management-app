//It is used to design the World Map Page layout
import { Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import React from 'react';
import markerIcon from '../utils/marker_icon.png';

interface WMapProps {
  countriesData: any[]; // Adjust the type according to your data structure
}

const WMap: React.FC<WMapProps> = ({ countriesData }) => {
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30]
  });

  console.log("This is from the Wmap", countriesData);

  return (
    <div className="">
      {countriesData?.map((country: any) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default WMap;

