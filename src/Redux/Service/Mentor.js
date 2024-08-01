import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_LIST } from "../baseUrl";

export const mentorApi = createApi({
  reducerPath: "mentorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LIST.mentor,
  }),
  endpoints: (builder) => ({
    getSingleMentor: builder.mutation({
      query: (data) => ({
        url: "",
        method: "post",
        body: data,
      }),
    }),
    getAllMentor: builder.query({
      query: (pageNumber) => `/mentorall/10/${pageNumber}`,
    }),
  }),
});

export const { useGetSingleMentorQuery, useGetAllMentorQuery } = mentorApi;
