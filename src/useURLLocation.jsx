import { useSearchParams } from "react-router-dom";

export default function useURLLocation() {
  const [searchParams] = useSearchParams();
  const maplat = searchParams.get("lat");
  const maplng = searchParams.get("lng");

  return { maplat, maplng };
}
