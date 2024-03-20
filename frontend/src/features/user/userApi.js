import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersManagers: builder.query({
      query: (role) => `/api/users/get-users-managers/${role}`,
      providesTags: ["getUsersManagers"],
    }),
    getManageUsersManagers: builder.query({
      query: (status) => `/api/users/get-manage-users-managers/${status}`,
      providesTags: ["getManageUsersManagers"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/api/users/update-profile`,
        method: "PUT",
        body: data,
      }),
    }),
    addManageUser: builder.mutation({
      query: (data) => ({
        url: `/api/users/add-manage-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getManageUsersManagers"],
    }),
    acceptRejectManageUser: builder.mutation({
      query: (data) => ({
        url: `/api/users/accept-reject-manage-user`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getManageUsersManagers"],
    }),
  }),
});

export const {
  useGetUsersManagersQuery,
  useGetManageUsersManagersQuery,
  useUpdateProfileMutation,
  useAddManageUserMutation,
  useAcceptRejectManageUserMutation,
} = userApi;
