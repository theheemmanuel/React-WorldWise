import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import World from "./Worlsdwise/World";
import Worldapp from "./Worlsdwise/Worldapp";
import CityList from "./Worlsdwise/CityList";
import CountryList from "./Worlsdwise/CountryList";
import City from "./Worlsdwise/City";
import Form from "./Worlsdwise/Form";
import { useContext } from "react";
import { ContextPost } from "./Context";
import Login from "./Worlsdwise/Login";
import ProtectedRoute from "./Worlsdwise/ProtectedRoute";

function App() {
  const { state } = useContext(ContextPost);
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <World />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute>
          <Worldapp />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Navigate replace to="cities" />,
        },
        {
          path: "cities",
          element: <CityList cities={state.city} isLoading={state.loading} />,
        },
        {
          path: "cities/:ID",
          element: <City />,
        },
        {
          path: "countries",
          element: <CountryList />,
        },
        {
          path: "form",
          element: <Form />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
