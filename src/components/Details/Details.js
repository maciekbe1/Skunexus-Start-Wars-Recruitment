import "./Details.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPlanetDetail } from "../../store/detailsReducer";
import Grid from "../Grid";

export default function Details() {
  const { id } = useParams();
  // const url = `https://swapi.dev/api/planets/${id}`;
  // const { data, loading, error } = useFetch(url);

  const dispatch = useDispatch();
  const { details, loading, status } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchPlanetDetail(id));
  }, [dispatch, id]);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {status === "Success" && (
        <div>
          <h1 className="text-3xl my-2">{details.values[0].name} Detail</h1>
          <Grid data={details} />
        </div>
      )}
      {status === "Failed" && <div>Failed to load the data</div>}
    </div>
  );
}
