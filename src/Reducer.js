export default function Reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "city":
      return { ...state, city: action.payload };
    case "loading":
      return { ...state, loading: action.payload };
    case "getCity":
      return { ...state, currentCity: action.payload };
  }
  // if (action.type === "city") {
  //   return action.payload;
  // }
  return action.payload;
}
