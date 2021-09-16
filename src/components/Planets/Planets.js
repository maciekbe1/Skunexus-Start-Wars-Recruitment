import "./Planets.css";

import Grid from "../Grid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlanets } from "../../store/planetsReducer";

function Planets() {
  const dispatch = useDispatch();
  const { planets, loading, status } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {status === "Success" && <Grid data={planets} />}
      {status === "Failed" && <div>Failed to load the data</div>}
    </div>
  );
}

export default Planets;
