import { configureStore } from "@reduxjs/toolkit";

import planetsReducer from "./planetsReducer";
import detailsReducer from "./detailsReducer";

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
