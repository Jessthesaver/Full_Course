import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/api/",
  }),
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: (args) => {
        const { galleryId, count, page } = args;

        return {
          url: `/gallery/${galleryId}`,
          params: { count, page },
        };
      },
    }),
  }),
});

export const { useGetGalleryQuery, usePrefetch } = apiSlice;
