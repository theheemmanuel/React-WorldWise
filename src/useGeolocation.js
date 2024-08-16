import { useState } from "react";

export default function useGeolocation() {
  const [isLoading, setIsLoading] = useState();
  const [position, setposition] = useState(null);
  const [error, seterror] = useState();

  function getPosition() {
    if (!navigator.geolocation)
      return seterror("Yoyr browser does not support geolocation");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (post) => {
        setposition({ lat: post.coords.latitude, lng: post.coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        seterror(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}
