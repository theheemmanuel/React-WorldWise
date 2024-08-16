import { useContext } from "react";
import { ContextPost } from "../Context";

const CountryList = () => {
  const { state } = useContext(ContextPost);
  const countries = state.city.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  if (state.isLoading) return <h1>Loading...</h1>;
  if (!state.city.length)
    return <h1>Add your first city by clicking on a city on the map</h1>;
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-5">
        {countries.map((city) => (
          <div
            key={city.id}
            className="w-full bg-gray-700 flex flex-col rounded-xl p-2 my-2 border-l-4 border-yellow-500"
          >
            <h1 className="text-3xl">{city.emoji}</h1>
            <h2 className="font-bold">{city.country}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
