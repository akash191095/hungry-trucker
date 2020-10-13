import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Map, TileLayer } from "react-leaflet";
import TooltipMarker from "../components/TooltipMarker";

const initialState = {
  lat: 37.7749,
  lng: -122.4194,
  zoom: 20,
};

const MarkersList = ({ markers }) => {
  const items = markers.map(({ content }) => (
    <TooltipMarker key={content.key} content={content} />
  ));
  return <>{items}</>;
};

async function getData({ lat, lng }) {
  const { data = [] } = await axios.get(
    `https://data.sfgov.org/resource/rqzj-sfat.json?$where=within_circle(location, ${lat}, ${lng}, 800)&$limit=100`,
    {
      headers: {
        "X-App-Token": process.env.REACT_APP_API_TOKEN,
      },
      withCredentials: false,
    }
  );
  return data;
}

function formatData(data) {
  return data.map((item) => {
    return {
      content: {
        key: item.objectid,
        position: [item.latitude, item.longitude],
        name: item.applicant,
        address: item.address,
        type: item.facilitytype,
        show: item.status === "APPROVED",
      },
    };
  });
}

function Home() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function intialize() {
      const data = await getData({
        lat: initialState.lat,
        lng: initialState.lng,
      });
      const allMarkers = formatData(data);
      setMarkers(allMarkers);
    }
    intialize();
  }, []);

  const position = [initialState.lat, initialState.lng];

  async function handleMove(event) {
    const { lat, lng } = event.target.getBounds().getCenter();
    const data = await getData({ lat, lng });
    // remove duplicate markers received from response
    setMarkers((prevState) => {
      const newMarkers = formatData(data);
      const allMarkers = _.uniqBy(
        [...newMarkers, ...prevState],
        (item) => item.content.key
      );
      return allMarkers;
    });
  }

  return (
    <div>
      <Map
        center={position}
        zoom={initialState.zoom}
        onmoveend={handleMove}
        style={{ height: "100vh", zIndex: 10 }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkersList markers={markers} />
      </Map>
    </div>
  );
}

export default Home;
