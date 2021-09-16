import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { planetHeader } from "../constants/headers";
import { sortByListOrder } from "../utils/sortByListOrder";
import PlanetActions from "../components/Planets/PlanetActions";

const initialState = {
  planets: {},
  status: "idle",
  loading: false,
};

export const fetchPlanets = createAsyncThunk(
  "planets/fetchPlanets",
  async () => {
    const response = await fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .catch((err) => err);
    return response;
  }
);

export const planetSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      const sortedByHeader = action.payload.results.map((planet) => {
        return sortByListOrder(planet, planetHeader);
      });

      state.planets = {
        header: planetHeader,
        values: sortedByHeader,
        actions: (row) => <PlanetActions row={row} />,
      };
      state.status = "Success";
      state.loading = false;
    });
    builder.addCase(fetchPlanets.pending, (state, action) => {
      state.status = "Loading";
      state.loading = true;
    });
    builder.addCase(fetchPlanets.rejected, (state, action) => {
      state.status = "Failed";
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { getPlanets } = planetSlice.actions;

export default planetSlice.reducer;
