import axios from "axios";
import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import { Line } from "react-chartjs-2";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import WMap from "./WMap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
}

const ChartAndMap: React.FC = () => {
  const [countriesData, setCountriesData] : any = useState([]);
//   const [countriesData, setCountriesData] = useState<CountryData[]>([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  console.log("This is chartData",chartData)
  // Fetch countries data
  useEffect(() => {
     function getCountries(){
       axios("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        const data: CountryData[] = res.data;
        setCountriesData(data);
      });
    }
    getCountries()
  }, []);

  // Fetch historical data for chart
  useEffect(() => {

         axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;
        const newChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };
        //@ts-ignore
        setChartData(newChartData);
        console.log("This is newChartData",newChartData)
      });


    // Register chart elements
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full pt-20 px-4 pb-8 bg-slate-300">
      <h2 className="text-2xl text-white font-bold mb-4 text-center">
        <h1 className="rounded-full text-center shadow-slate-700 bg-slate-700 p-3 text-2xl mx-auto">
          Corona Cases
        </h1>
      </h2>
      <div className="border-2 border-green-600 w-11/12 mx-auto mb-10">
        {chartData.datasets.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-green-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>
      <h2 className="text-xl text-white font-bold mb-4 text-center">
        <h1 className="rounded-full text-center shadow-slate-700 bg-slate-700 p-3 text-2xl mx-auto">
          Corona Cases Map
        </h1>
      </h2>
      <div className="h-96 border-2 border-blue-500 w-11/12 mx-auto mb-5">
        <MapContainer
          className="m-auto w-full h-full border-blue-700"
          bounds={[[-60, -180], [85, 180]]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <WMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartAndMap;
