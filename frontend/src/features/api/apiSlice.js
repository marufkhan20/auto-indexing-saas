import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
    }
    return result;
  },
});

// create api slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    // prepareHeaders: async (headers, { getState, endpoint }) => {
    //   const token = getState()?.auth?.accessToken;

    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: [
    "getUsersManagers",
    "getGalleries",
    "getTemplateFolders",
    "getTemplates",
    "getTemplate",
    "getPosts",
    "getJoinedTeams",
    "getTeamTemplates",
    "getTeamGalleries",
    "getManageUsersManagers",
    "getPackages",
    "getSubscriptions",
    "getDocumentation",
  ],
  endpoints: (builder) => ({}),
});
