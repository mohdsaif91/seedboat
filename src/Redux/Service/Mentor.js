import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "../baseUrl";

// https://seedboat.qortechno.com/mentor/mentor-individual
//

export const mentorApi = createApi({
  reducerPath: "mentorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/mentor/mentor-individual`,
  }),
  endpoints: (builder) => ({
    getSingleMentor: builder.mutation({
      query: (data) => ({
        url: "",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetSingleMentorQuery } = mentorApi;
