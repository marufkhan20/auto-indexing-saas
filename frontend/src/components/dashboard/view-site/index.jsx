/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/components/shared/Loading";
import Error from "@/components/ui/Error";
import { useGetSiteQuery, useIndexUrlMutation } from "@/features/site/siteApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Circle } from "rc-progress";
import { useEffect, useState } from "react";
import PageItem from "./PageItem";

const ViewSite = () => {
  const { id } = useParams();
  const [indexedUrls, setIndexedUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedPerchantage, setCompletedPerchantage] = useState(0);

  // get site data
  const { data: site, isLoading, refetch } = useGetSiteQuery(id);

  // index url
  const [
    indexUrl,
    { data: indexedUrl, isLoading: indexLoading, isError, error },
  ] = useIndexUrlMutation();

  useEffect(() => {
    if (!indexLoading && indexedUrl?.urlNotificationMetadata) {
      const { url } = indexedUrl?.urlNotificationMetadata || {};
      setIndexedUrls([...indexedUrls, url]);

      if (site?.urls?.length !== currentIndex + 1) {
        console.log("length", site?.urls?.length);
        console.log("current index", currentIndex + 1);
        indexUrl({ url: site?.urls[currentIndex + 1] });
        setCurrentIndex(currentIndex + 1);
      }
    }
  }, [indexLoading, indexedUrl]);

  useEffect(() => {
    if (site?.urls?.length > 0) {
      indexUrl({ url: site?.urls[currentIndex] });
    }
  }, [indexUrl, site]);

  // calculate perchantage
  useEffect(() => {
    if (indexedUrls?.length > 0 && site?.urls?.length > 0) {
      const totalCount = site?.urls?.length;
      const currentTotalCount = indexedUrls?.length;

      // Calculate the percentage completion
      const percentage = Math.round((currentTotalCount / totalCount) * 100);

      setCompletedPerchantage(percentage);
    }
  }, [indexedUrls]);
  return (
    <div className="container px-5 sm:px-0">
      <div className="flex justify-between flex-wrap items-center gap-10">
        <div className="flex items-center flex-wrap gap-5">
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
          <button className="bg-white py-3 px-4 rounded-lg flex items-center justify-between min-w-[280px]">
            <div className="flex items-center gap-2">
              <img
                src="/images/dashboard/site-icon.png"
                alt="site-icon"
                className="w-5 h-5 rounded-md"
              />
              <h3 className="text-sm font-semibold">
                {site?.siteUrl || "Loading..."}
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M2.91875 5.76523C2.84317 5.69381 2.75426 5.63797 2.6571 5.60091C2.55994 5.56385 2.45643 5.54628 2.35248 5.54923C2.24853 5.55217 2.14618 5.57555 2.05127 5.61805C1.95636 5.66054 1.87075 5.72132 1.79933 5.7969C1.72791 5.87248 1.67207 5.96139 1.63501 6.05855C1.59795 6.15571 1.58038 6.25922 1.58332 6.36316C1.58626 6.46711 1.60965 6.56946 1.65215 6.66437C1.69464 6.75928 1.75542 6.84489 1.831 6.91631L8.956 13.6455C9.10298 13.7844 9.29759 13.8619 9.49987 13.8619C9.70215 13.8619 9.89676 13.7844 10.0437 13.6455L17.1695 6.91631C17.2468 6.84536 17.3091 6.75977 17.353 6.66451C17.3969 6.56925 17.4214 6.46623 17.4251 6.36141C17.4289 6.2566 17.4117 6.15209 17.3747 6.05396C17.3377 5.95583 17.2816 5.86603 17.2096 5.78977C17.1376 5.71352 17.0511 5.65233 16.9553 5.60977C16.8594 5.5672 16.7561 5.54411 16.6512 5.54183C16.5464 5.53954 16.4421 5.55812 16.3445 5.59647C16.2469 5.63482 16.1578 5.69218 16.0826 5.76523L9.49987 11.9814L2.91875 5.76523Z"
                fill="#0E4C2E"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center flex-wrap justify-between gap-5 bg-white min-w-[40%] pl-4 py-2 pr-2 rounded-tl-lg rounded-bl-lg rounded-tr-[21px] rounded-br-[21px]">
          <h3 className="text-lg font-semibold">
            {site?.urls?.length || 0} pages
          </h3>
          <div className="flex items-center flex-wrap gap-3">
            <span className="text-sm font-semibold">Auto Index:</span>
            <button
              className={`px-[14px] py-1 rounded-full ${
                site?.autoIndex ? "bg-primary" : "bg-red-600"
              } text-white`}
            >
              {site?.autoIndex ? "ON" : "OFF"}
            </button>
            <button
              className="w-8 h-8 rounded-full bg-light-primary flex items-center justify-center"
              onClick={refetch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M10.9375 4.04688L10.36 3.37504C9.87035 2.86075 9.28117 2.45147 8.62832 2.1721C7.97547 1.89273 7.27261 1.74912 6.5625 1.75C3.66406 1.75 1.3125 4.10157 1.3125 7C1.3125 9.89844 3.66406 12.25 6.5625 12.25C7.64832 12.2499 8.70744 11.9133 9.59409 11.2866C10.4807 10.6598 11.1514 9.77361 11.5136 8.75"
                  stroke="#1DA664"
                  stroke-width="0.875"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                />
                <path
                  d="M12.6875 1.87167V6.01561C12.6875 6.04462 12.676 6.07244 12.6555 6.09295C12.6349 6.11347 12.6071 6.12499 12.5781 6.12499H8.43417C8.41252 6.12501 8.39136 6.1186 8.37336 6.10658C8.35536 6.09457 8.34132 6.07748 8.33304 6.05748C8.32475 6.03749 8.32259 6.01548 8.32681 5.99425C8.33104 5.97302 8.34147 5.95353 8.35679 5.93823L12.5007 1.79429C12.516 1.77897 12.5355 1.76854 12.5568 1.76431C12.578 1.76009 12.6 1.76225 12.62 1.77054C12.64 1.77882 12.6571 1.79286 12.6691 1.81086C12.6811 1.82886 12.6875 1.85002 12.6875 1.87167Z"
                  fill="#1DA664"
                />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-light-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M5.83317 8.16665H1.1665M4.6665 5.83331H1.1665M3.49984 3.49998H1.1665M6.99984 10.5H1.1665M11.0832 11.6666V2.33331M11.0832 11.6666L12.8332 9.91665M11.0832 11.6666L9.33317 9.91665M11.0832 2.33331L12.8332 4.08331M11.0832 2.33331L9.33317 4.08331"
                  stroke="#1DA664"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between gap-6">
        <div className="p-5 bg-white rounded-2xl w-full sm:min-w-[350px] md:w-[35%] h-fit">
          <h3 className="text-lg font-semibold">Website Progress</h3>
          <div className="flex justify-center mt-10 mb-3">
            <div className="relative w-fit">
              <Circle
                percent={completedPerchantage}
                width={250}
                strokeWidth="8"
                trailWidth={8}
                strokeColor="#1DA664"
                trailColor="#e8f6f0"
              />
              <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-2xl font-semibold">
                {completedPerchantage}%
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[62%] overflow-auto">
          {isLoading ? (
            <div className="min-w-[650px] min-h-full items-center justify-center sm:w-full flex flex-col gap-5 p-5 bg-white rounded-2xl h-fit">
              {" "}
              <Loading type="secondary" />
            </div>
          ) : (
            <div className="min-w-[650px] sm:w-full flex flex-col gap-5 p-5 bg-white rounded-2xl min-h-full">
              {indexedUrls?.map((indexedUrl) => (
                <PageItem key={indexedUrl} pageUrl={indexedUrl} views="00" />
              ))}
              {indexLoading && (
                <div className="flex items-center justify-center w-full">
                  <Loading />
                </div>
              )}

              {isError && (
                <div className="flex items-center justify-center w-full">
                  <Error>{error?.data?.error}</Error>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSite;
