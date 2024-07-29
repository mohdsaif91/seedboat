import { configureStore } from "@reduxjs/toolkit";
import { investorApi } from "./Service/Investor";
import { mentorApi } from "./Service/Mentor";

export const store = configureStore({
  reducer: {
    [investorApi.reducerPath]: investorApi.reducer,
    [mentorApi.reducerPath]: mentorApi.reducer,
  },
  middleware: (getDfaultMiddleware) =>
    getDfaultMiddleware().concat([
      investorApi.middleware,
      mentorApi.middleware,
    ]),
});
