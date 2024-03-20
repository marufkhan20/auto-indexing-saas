const SiteItem = ({ site }) => {
  return (
    <div
      href={`/dashboard/view-site/${site?.siteUrl?.replace("//", "-")}`}
      className="p-4 rounded-2xl bg-[#F7F7F9]"
    >
      <div className="bg-white py-[50px] flex items-center justify-center rounded-lg">
        <img
          src="/images/dashboard/site-icon.png"
          alt="site icon"
          className="w-[50px] h-[50px] rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4 text-center">
        {site?.siteUrl}
      </h3>
    </div>
  );
};

export default SiteItem;
