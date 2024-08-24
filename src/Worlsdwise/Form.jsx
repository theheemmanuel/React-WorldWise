/* eslint-disable react-refresh/only-export-components */
"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0";

import { useContext, useEffect, useState } from "react";
import { ContextPost } from "../Context";
import useURLLocation from "../useURLLocation";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// convertToEmoji.js
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const { maplat, maplng } = useURLLocation();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [emoji, setemoji] = useState("");

  const { addCity } = useContext(ContextPost);

  useEffect(() => {
    if (!maplat || !maplng) return;
    const fetchName = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${maplat}&longitude=${maplng}`
        );
        const data = await response.json();
        setCityName(data.city || data.locality);
        setCountry(data.countryName);
        setLoading(false);
        setemoji(convertToEmoji(data.countryCode));
      } catch (error) {
        console.log(error);
      }
    };
    fetchName();
  }, [maplat, maplng]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if ((!maplat, !maplng)) {
    return (
      <span className="font-bold mb-6 text-zinc-300">
        Start by clicking somewhere on the map! 📍
      </span>
    );
  }

  if (country === "") {
    return (
      <span className="font-bold mb-6 text-zinc-300">
        That doesn&apos;t seem to be a city. Click somewhere else
      </span>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewCity = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: {
        lat: maplat,
        lng: maplng,
      },
    };
    addCity(NewCity);
    navigate("/app");
  };

  return (
    <form
      className=" bg-gray-700 p-4 rounded-xl text-left"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <label htmlFor="cityName">City name</label>
        <input
          className="block w-full rounded-lg p-1 text-black"
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className="absolute right-2 top-6 text-3xl">{emoji}</span>
      </div>

      <div className="mt-3 w-full">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <div className="text-black w-full!important">
          <DatePicker
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            className="block w-full rounded-lg p-1 text-black"
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          className="block w-full rounded-lg p-1 text-black"
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between mt-4">
        <button type="submit">Add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;
