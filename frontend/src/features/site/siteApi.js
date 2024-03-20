import { apiSlice } from "../api/apiSlice";

export const siteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSites: builder.query({
      query: () => `/api/sites`,
    }),
    getSite: builder.query({
      query: (id) => `/api/sites/${id}`,
    }),
    indexUrl: builder.mutation({
      query: (data) => ({
        url: `/api/sites/index-site-url`,
        method: "POST",
        body: data,
      }),
    }),
    subscribePackage: builder.mutation({
      query: (data) => ({
        url: `/api/subscriptions/subscribe-package`,
        method: "POST",
        body: data,
      }),
    }),
    updateSiteInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/sites/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/api/packages/delete-package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getPackages"],
    }),
  }),
});

export const {
  useGetSitesQuery,
  useGetSiteQuery,
  useIndexUrlMutation,
  useDeletePackageMutation,
  useUpdateSiteInfoMutation,
} = siteApi;
