"use client";
import Loading from "@/components/shared/Loading";
import { useGetSitesQuery } from "@/features/site/siteApi";
import Link from "next/link";
import SiteItem from "./SiteItem";

const ManageSites = () => {
  const { data: sites, isLoading, refetch } = useGetSitesQuery();
  return (
    <div>
      <div className="container px-5 sm:px-0">
        <div className="flex items-center justify-between flex-wrap gap-y-5">
          <div className="flex sm:items-center gap-5 flex-col sm:flex-row">
            <Link
              className="w-11 h-11 rounded-full transition-all hover:bg-primary bg-white flex items-center justify-center"
              href="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M15.8335 9.5L3.16683 9.5M3.16683 9.5L7.91683 14.25M3.16683 9.5L7.91683 4.75"
                  stroke="#9AA2B0"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <div className="">
              <h3 className="text-lg leading-[27px]">Mange Site</h3>
              <p className="text-sm font-semibold text-[#9AA2B0]">
                Select which sites you would to like to inport into get indexed
                fast by enabling below.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              className="flex items-center px-4 py-[10px] rounded-full bg-white gap-2 text-sm font-semibold text-body-secondary transition-all hover:bg-light-primary"
              onClick={refetch}
            >
              <img src="/images/icons/google.svg" alt="google" />
              <span>Import/Refresh All Sites</span>
            </button>
            <button className="flex items-center px-4 py-[10px] rounded-full bg-white gap-2 text-sm font-semibold text-body-secondary transition-all hover:bg-light-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M7.99967 1.83331C4.31967 1.83331 1.33301 4.81998 1.33301 8.49998C1.33301 12.18 4.31967 15.1666 7.99967 15.1666C11.6797 15.1666 14.6663 12.18 14.6663 8.49998C14.6663 4.81998 11.6797 1.83331 7.99967 1.83331ZM7.99967 11.8333C7.63301 11.8333 7.33301 11.5333 7.33301 11.1666V8.49998C7.33301 8.13331 7.63301 7.83331 7.99967 7.83331C8.36634 7.83331 8.66634 8.13331 8.66634 8.49998V11.1666C8.66634 11.5333 8.36634 11.8333 7.99967 11.8333ZM8.66634 6.49998H7.33301V5.16665H8.66634V6.49998Z"
                  fill="#707070"
                />
              </svg>
              <span>{`What's`} new</span>
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white p-5 rounded-2xl ">
          <h3 className="text-lg font-semibold">Indexing</h3>
          {isLoading ? (
            <Loading type="secondary" />
          ) : (
            <div className="pb-5 overflow-auto">
              <div className="mt-4 w-full min-w-[1000px] grid grid-cols-8 gap-5 items-center">
                <span className="col-span-2 text-sm font-semibold text-[#9AA2B0]">
                  Property
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Sitemaps
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Enabled
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Indexing Quota
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Auto Index
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Limit
                </span>
                <span className="text-sm font-semibold text-[#9AA2B0]">
                  Action
                </span>

                {sites?.map((site) => (
                  <SiteItem refetch={refetch} site={site} key={site?.siteUrl} />
                ))}
              </div>
            </div>
          )}

          {!isLoading && sites?.length === 0 && (
            <span className="block text-center font-medium">
              No Sites Found!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageSites;
