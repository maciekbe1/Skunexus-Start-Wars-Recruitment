import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { detailsHeader } from "../constants/headers";
import { sortByListOrder } from "../utils/sortByListOrder";

const initialState = {
  details: {},
  status: "idle",
  loading: false,
};

export const fetchPlanetDetail = createAsyncThunk(
  "details/fetchPlanetDetail",
  async (id) => {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => err);
    const films = await Promise.all(
      response.films.map(async (url) => {
        return await fetch(url).then((res) => {
          return res.json();
        });
      })
    );
    const residents = await Promise.all(
      response.residents.map(async (url) => {
        return await fetch(url).then((res) => {
          return res.json();
        });
      })
    );
    response.films = films.map((i) => i.title).join(", ");
    response.residents = residents.map((i) => i.name).join(", ");
    return response;
  }
);

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlanetDetail.fulfilled, (state, action) => {
      const sortedByHeader = sortByListOrder(action.payload, detailsHeader);

      state.details = {
        header: detailsHeader,
        values: [sortedByHeader],
      };
      state.status = "Success";
      state.loading = false;
    });
    builder.addCase(fetchPlanetDetail.pending, (state, action) => {
      state.status = "Loading";
      state.loading = true;
    });
    builder.addCase(fetchPlanetDetail.rejected, (state, action) => {
      state.status = "Failed";
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default detailsSlice.reducer;
