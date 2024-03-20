import Heading from "../shared/Heading";

const Guide = () => {
  return (
    <section className="py-[100px] bg-white px-5 sm:px-0">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-[10px] mb-[14px]">
          <img className="w-5 h-5" src="/images/icons/list.png" alt="list" />
          <span className="text-sm">The modern standard</span>
        </div>
        <Heading
          title="The Lazy Person's Guide to Getting Ranked on Google"
          subTitle="Leave Your Competitors in the Dust with Fast Google Indexing"
          classname="w-full md:w-[80%] lg:w-[60%] 2xl:w-[60%] mx-auto"
          center
        />
        <div className="mt-[56px] grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          <div className="md:col-span-2 bg-[#F7F7F9] p-4 rounded-[16px]">
            <h3 className="text-xl mb-2">
              Get indexed fast, drive more traffic
            </h3>
            <p className="text-sm font-medium leading-[24px] mb-6">
              If Google {`hasn't`} indexed your pages yet, it {`doesn't`} know
              about them. That means no impressions or clicks from organic
              search. GetIndexedFast gets your pages indexed right away instead
              of lost and overlooked. No more waiting months only to be
              disappointed. We make sure Google knows your pages exist on day
              one. Promise.
            </p>
            <img src="/images/guide/guide-1.png" alt="guide image" />
            <div className="bg-white blur-lg opacity-70 w-full h-20 -mt-20"></div>
          </div>
          <div className="bg-[#F7F7F9] p-4 rounded-[16px]">
            <img src="/images/guide/guide-2.png" alt="guide image" />
            <div className="bg-white blur-lg opacity-70 w-full h-20 -mt-20"></div>
            <h3 className="text-xl mb-2 mt-6">One click fast bulk indexing</h3>
            <p className="text-sm font-medium leading-[24px]">
              Submit your entire sitemap or select groups of pages into search
              engine indexing queues instantly with a single button. Rapidly get
              all your most important pages and content in front of search
              engines all at once.
            </p>
          </div>
          <div className="bg-[#F7F7F9] p-4 rounded-[16px]">
            <img src="/images/guide/guide-3.png" alt="guide image" />
            <div className="bg-white blur-lg opacity-70 w-full h-20 -mt-20"></div>
            <h3 className="text-xl mb-2 mt-6">Autopilot everything</h3>
            <p className="text-sm font-medium leading-[24px]">
              Turn on Autopilot - With one click, enable hands-free indexing
              management powered by our technology for ongoing optimization.
              GetIndexedFast will handle everything!
            </p>
          </div>
          <div className="bg-[#F7F7F9] p-4 rounded-[16px]">
            <img src="/images/guide/guide-4.png" alt="guide image" />
            <div className="bg-white blur-lg opacity-70 w-full h-20 -mt-20"></div>
            <h3 className="text-xl mb-2 mt-6">Autoindex and Auto-deindex</h3>
            <p className="text-sm font-medium leading-[24px]">
              Newly added pages are automatically indexed in the background
              while unpublished or deleted content gets removed seamlessly
              behind the scenes. No manual updating needed.
            </p>
          </div>
          <div className="bg-[#F7F7F9] p-4 rounded-[16px]">
            <img src="/images/guide/guide-5.png" alt="guide image" />
            <div className="bg-white blur-lg opacity-70 w-full h-20 -mt-20"></div>
            <h3 className="text-xl mb-2 mt-6">Manage multiple sites</h3>
            <p className="text-sm font-medium leading-[24px]">
              Powerful centralized dashboard for indexing management across
              unlimited number of websites in the account. Track and control the
              indexing status of all your domains and properties in one easy
              place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
