import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useContext, useEffect, useState } from "react";
import { ContextPost } from "../Context";
import useGeolocation from "../useGeolocation";
import useURLLocation from "../useURLLocation";

const Map = () => {
  const { maplat, maplng } = useURLLocation();

  const { state } = useContext(ContextPost);
  const [position, setPosition] = useState([8.96596, 7.45433]);

  useEffect(() => {
    if (maplat && maplng) {
      setPosition([maplat, maplng]);
    }
  }, [maplat, maplng]);

  const { isLoading, getPosition, position: geoposition } = useGeolocation();
  useEffect(() => {
    if (geoposition) {
      setPosition([geoposition.lat, geoposition.lng]);
    }
  }, [geoposition]);
  return (
    <div className="w-1/2 min-h-[70vh] bg-gray-600 text-white">
      <button
        className="absolute bottom-0 z-1 bg-green-500 right-8 px-6 py-2 rounded-xl"
        onClick={getPosition}
      >
        {isLoading ? "Loading..." : "Use position"}
      </button>
      <MapContainer
        className="h-full w-full"
        center={position}
        zoom={6}
        // scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {state.city.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <Changecenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function Changecenter({ position }) {
  const map = useMap();
  map.setView(position);
  return;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
