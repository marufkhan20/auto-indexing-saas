import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getUsersManagers"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;

          // dispatch userLoggedIn action
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/update-user`,
        method: "PUT",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: `/api/auth/reset-password/${token}`,
        method: "PUT",
        body: {
          password,
        },
      }),
    }),
    updatePassword: builder.mutation({
      query: (password) => ({
        url: `/api/auth/update-password`,
        method: "PUT",
        body: {
          password,
        },
      }),
    }),
    self: builder.query({
      query: () => `/api/auth/self`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,
  useSelfQuery,
} = authApi;
