import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h2>POSITION</h2>
      <div>
        {lat}, {lng}
      </div>
      <button
        onClick={() => {
          setSearchParams({ lat: "24" });
        }}
      >
        change coords
      </button>
    </div>
  );
};
