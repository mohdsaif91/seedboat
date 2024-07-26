import { configureStore } from "@reduxjs/toolkit";
import { investorApi } from "./Service/Investor";

export const store = configureStore({
  reducer: {
    [investorApi.reducerPath]: investorApi.reducer,
  },
  middleware: (getDfaultMiddleware) =>
    getDfaultMiddleware().concat([investorApi.middleware]),
});
