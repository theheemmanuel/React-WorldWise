export default function Reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "city":
      return { ...state, city: action.payload };
    case "loading":
      return { ...state, loading: action.payload };
    case "getCity":
      return { ...state, currentCity: action.payload, loading: false };
    case "addCity":
      return { ...state, city: action.payload, loading: false };
    case "deleteCity":
      return { ...state, city: action.payload, loading: false };
    case "login":
      return { ...state, user: action.payload, isAuth: true };
    case "logout":
      return { ...state, user: null, isAuth: false };
  }
  // if (action.type === "city") {
  //   return action.payload;
  // }
  return action.payload;
}
