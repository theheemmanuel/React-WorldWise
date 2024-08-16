import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextPost } from "../Context";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityList = () => {
  const { state } = useContext(ContextPost);
  if (state.isLoading) return <h1>Loading...</h1>;
  if (!state.city.length)
    return <h1>Add your first city by clicking on a city on the map</h1>;
  return (
    <div>
      <ul>
        {state.city.map((city) => (
          <Link
            to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
            key={city.id}
          >
            <li
              className={`w-full bg-gray-700 flex rounded-xl p-2 gap-3 my-2 border-l-4 border-green-500 ${
                state.currentCity.id === city.id
                  ? "border-2 border-green-400"
                  : ""
              }`}
            >
              <h1>{city.emoji}</h1>
              <div className="flex justify-between flex-1">
                <h2 className="font-bold">{city.cityName}</h2>
                <p>{formatDate(city.date)}</p>
              </div>
              <button className="hover:bg-green-500 px-2 rounded-full bg-gray-800">
                &times;
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
