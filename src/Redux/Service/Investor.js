import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "../baseUrl";

export const investorApi = createApi({
  reducerPath: "investorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/investor/investorall`,
  }),
  endpoints: (builder) => ({
    getInvestorList: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetInvestorListQuery } = investorApi;
