import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import World from "./Worlsdwise/World";
// import CityList from "./Worlsdwise/CityList";
// import CountryList from "./Worlsdwise/CountryList";
// import City from "./Worlsdwise/City";
import Form from "./Worlsdwise/Form";
import ProtectedRoute from "./Worlsdwise/ProtectedRoute";

const Login = lazy(() => import("./Worlsdwise/login"));
const Worldapp = lazy(() => import("./Worlsdwise/Worldapp"));
const City = lazy(() => import("./Worlsdwise/City"));
const CityList = lazy(() => import("./Worlsdwise/CityList"));
// const Form = lazy(() => import("./Worlsdwise/Form"));
const CountryList = lazy(() => import("./Worlsdwise/CountryList"));

function App() {
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
          element: <CityList />,
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
  return (
    <Suspense fallback={<h1 className="text-2xl">Loading</h1>}>
      <RouterProvider router={Router} />;
    </Suspense>
  );
}

export default App;
