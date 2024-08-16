/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextPost } from "../Context";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

const City = () => {
  const navigate = useNavigate();
  const { ID } = useParams();
  const { getCity, state } = useContext(ContextPost);
  useEffect(() => {
    getCity(ID);
  }, [ID]);
  const { cityName, emoji, date, notes } = state.currentCity;

  if (state.loading) return <h1>Loading...</h1>;
  return (
    <div className="bg-gray-600 py-4 px-6 rounded-lg text-left">
      <div className="py-2">
        <h1 className="text-sm font-bold text-gray-300 pb-1">CITYNAME</h1>
        <span>
          {emoji} {""}
          {cityName}
        </span>
      </div>
      <div className="py-2">
        <h1 className="uppercase text-sm font-bold text-gray-300 pb-1">
          You went to {cityName} on
        </h1>
        <span>{date}</span>
      </div>
      {notes && (
        <div className="py-2">
          <h1 className="uppercase text-sm font-bold text-gray-300 pb-1">
            Your notes
          </h1>
          <span>{notes}</span>
        </div>
      )}
      <button
        className="border-2 border-gray-200 px-2 py-1 rounded-lg mt-3"
        onClick={() => navigate(-1)}
      >
        &larr;Go Back
      </button>
    </div>
  );
};

export default City;
