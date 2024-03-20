/* eslint-disable react-hooks/exhaustive-deps */
import { useUpdateSiteInfoMutation } from "@/features/site/siteApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SiteItem = ({ site, refetch }) => {
  const [enabled, setEnabled] = useState(false);
  const [autoIndex, setAutoIndex] = useState(false);
  const { id, siteUrl, limit, siteMaps } = site || {};

  useEffect(() => {
    setEnabled(site?.enabled);
    setAutoIndex(site?.autoIndex);
  }, [site]);

  // update site info
  const [updateSiteInfo, { data: updatedSite, isLoading, isError, error }] =
    useUpdateSiteInfoMutation();

  useEffect(() => {
    if (isError && error) {
      toast.error(error.data);
      refetch();
    }
  }, [updatedSite, refetch, isError, error, isLoading]);

  // update site handler
  const updateSiteHandler = (data) => {
    updateSiteInfo({ id: id || 1, data: { siteUrl, ...data } });
  };
  return (
    <>
      <div className="col-span-2 flex items-center gap-4">
        <h3 className="text-sm font-semibold">
          {siteUrl?.replace("https://", "").split(".")[0]}
        </h3>
        <div className="px-3 py-1 rounded-full bg-light-primary text-sm font-semibold">
          Owner
        </div>
      </div>
      <span className="text-sm font-semibold">{siteMaps}</span>
      <div>
        <div class="toggle-switch">
          <input
            onChange={(e) => {
              setEnabled(e.target.checked);
              updateSiteHandler({ enabled: e.target.checked });
            }}
            type="checkbox"
            id="enabled"
            class="hidden"
            checked={enabled}
          />
          <label for="enabled" class="toggle-switch-label">
            <div class="toggle-switch-dot"></div>
          </label>
        </div>
      </div>
      <span className="text-sm font-semibold text-primary">1</span>
      <div>
        <div class="toggle-switch">
          <input
            onChange={(e) => {
              setAutoIndex(e.target.checked);
              updateSiteHandler({ autoIndex: e.target.checked });
            }}
            type="checkbox"
            id="autoIndex"
            class="hid
            den"
            checked={autoIndex}
          />
          <label for="autoIndex" class="toggle-switch-label">
            <div class="toggle-switch-dot"></div>
          </label>
        </div>
      </div>
      <select
        name=""
        id=""
        className="inline-block w-16 px-3 py-[10px] border border-primary rounded-xl text-primary font-semibold text-sm outline-none cursor-pointer bg-white"
        onChange={(e) => updateSiteHandler({ limit: e.target.value })}
      >
        <option value="5" selected={limit === 5}>
          5
        </option>
        <option value="7" selected={limit === 7}>
          7
        </option>
        <option value="10" selected={limit === 10}>
          10
        </option>
        <option value="12" selected={limit === 12}>
          12
        </option>
      </select>
      <Link
        href={enabled ? `/dashboard/view-site/${id}` : "#"}
        className="px-6 py-[10px] rounded-full border border-primary flex items-center gap-3 w-fit transition-all hover:bg-primary text-primary hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
        >
          <path
            d="M11 10.2273C12.6201 10.2273 13.9334 9.00623 13.9334 7.5C13.9334 5.99377 12.6201 4.77273 11 4.77273C9.37992 4.77273 8.06658 5.99377 8.06658 7.5C8.06658 9.00623 9.37992 10.2273 11 10.2273Z"
            fill="#1DA664"
          />
          <path
            d="M21.9563 7.26818C21.0938 5.19385 19.5964 3.39997 17.6492 2.10824C15.702 0.816515 13.3904 0.0835725 11 0C8.60964 0.0835725 6.29802 0.816515 4.35083 2.10824C2.40363 3.39997 0.906232 5.19385 0.0436893 7.26818C-0.0145631 7.41798 -0.0145631 7.58202 0.0436893 7.73182C0.906232 9.80615 2.40363 11.6 4.35083 12.8918C6.29802 14.1835 8.60964 14.9164 11 15C13.3904 14.9164 15.702 14.1835 17.6492 12.8918C19.5964 11.6 21.0938 9.80615 21.9563 7.73182C22.0146 7.58202 22.0146 7.41798 21.9563 7.26818ZM11 11.9318C10.0572 11.9318 9.1356 11.6719 8.35171 11.1849C7.56781 10.6979 6.95684 10.0058 6.59605 9.19598C6.23526 8.38617 6.14086 7.49508 6.32479 6.6354C6.50872 5.77571 6.96271 4.98603 7.62936 4.36623C8.29601 3.74643 9.14537 3.32434 10.07 3.15334C10.9947 2.98234 11.9532 3.0701 12.8242 3.40553C13.6952 3.74097 14.4397 4.30901 14.9635 5.03781C15.4872 5.76662 15.7668 6.62347 15.7668 7.5C15.7649 8.67484 15.262 9.80104 14.3685 10.6318C13.475 11.4625 12.2636 11.93 11 11.9318Z"
            fill="#1DA664"
          />
        </svg>
        <span className="font-semibold text-sm">View</span>
      </Link>
    </>
  );
};

export default SiteItem;
