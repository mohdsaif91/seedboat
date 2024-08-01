import { configureStore } from "@reduxjs/toolkit";
import { investorApi } from "./Service/Investor";
import { mentorApi } from "./Service/Mentor";
import { startUpAPi } from "./Service/StartUp";

export const store = configureStore({
  reducer: {
    [investorApi.reducerPath]: investorApi.reducer,
    [mentorApi.reducerPath]: mentorApi.reducer,
    [startUpAPi.reducerPath]: startUpAPi.reducer,
  },
  middleware: (getDfaultMiddleware) =>
    getDfaultMiddleware().concat([
      investorApi.middleware,
      mentorApi.middleware,
      startUpAPi.middleware,
    ]),
});
