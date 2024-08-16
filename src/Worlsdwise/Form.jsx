"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0";

import { useContext, useState } from "react";
import { ContextPost } from "../Context";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const x = useContext(ContextPost);
  console.log(x);

  return (
    <form className=" bg-gray-700 p-4 rounded-xl text-left">
      <div className="">
        <label htmlFor="cityName">City name</label>
        <input
          className="block w-full rounded-lg p-1 text-black"
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={flag}>{emoji}</span> */}
      </div>

      <div className="mt-3">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          className="block w-full rounded-lg p-1 text-black"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
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
        <button>Add</button>
        <button>&larr; Back</button>
      </div>
    </form>
  );
}

export default Form;
