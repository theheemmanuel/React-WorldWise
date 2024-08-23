/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

export const ContextPost = createContext();

export function PostContextProvider({ children }) {
  const InitialState = { loading: false, city: [], currentCity: {} };
  const [state, dispatch] = useReducer(Reducer, InitialState);
  useEffect(() => {
    const fetchCity = async () => {
      dispatch({ type: "loading", payload: true });
      try {
        const response = await fetch("http://localhost:4000/cities", {
          headers: {
            accept: "application/json",
          },
        });
        const resJon = await response.json();
        dispatch({ type: "city", payload: resJon });
      } catch (error) {
        console.log(error);
        dispatch({ type: "loading", payload: false });
      }
    };
    fetchCity();
  }, []);

  const getCity = async (id) => {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await fetch(`http://localhost:4000/cities/${id}`, {
        headers: {
          accept: "application/json",
        },
      });
      const resJon = await response.json();
      dispatch({ type: "getCity", payload: resJon });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: false });
    }
  };

  const addCity = async (city) => {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await fetch("http://localhost:4000/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(city),
      });
      const resJon = await response.json();
      dispatch({ type: "addCity", payload: [...state.city, resJon] });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: false });
    }
  };

  const deleteCity = async (id) => {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await fetch(`http://localhost:4000/cities/${id}`, {
        method: "DELETE",
      });
      const resJon = await response.json();
      console.log(resJon);
      dispatch({
        type: "deleteCity",
        payload: state.city.filter((city) => city.id !== id),
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: false });
    }
  };

  return (
    <ContextPost.Provider value={{ state, getCity, addCity, deleteCity }}>
      {children}
    </ContextPost.Provider>
  );
}
