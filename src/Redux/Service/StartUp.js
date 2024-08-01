import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_LIST } from "../baseUrl";

export const startUpAPi = createApi({
  reducerPath: "startUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LIST.startup,
  }),
  endpoints: (builder) => ({
    getAllStartUp: builder.query({
      query: () => "/getallstartup",
    }),
  }),
});
export const { useGetAllStartUpQuery } = startUpAPi;
