import { apiSlice } from "../api/apiSlice";

export const subscriptionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => `/api/subscriptions`,
    }),
    subscribePackage: builder.mutation({
      query: (data) => ({
        url: `/api/subscriptions/subscribe-package`,
        method: "POST",
        body: data,
      }),
    }),
    updateSubscriptionPlan: builder.mutation({
      query: (data) => ({
        url: `/api/subscriptions/update-subscription-plan`,
        method: "POST",
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
  useGetSubscriptionsQuery,
  useDeletePackageMutation,
  useSubscribePackageMutation,
  useUpdateSubscriptionPlanMutation,
} = subscriptionApi;
