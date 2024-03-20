import Heading from "../shared/Heading";

const HowItWorks = () => {
  return (
    <section id="work" className="py-[100px] bg-light-primary px-5 sm:px-0">
      <div className="container-custom">
        <Heading title="How it works" />
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center gap-5">
              <span className="text-[#F3F4F6] font-semibold text-sm flex items-center justify-center bg-primary rounded-full w-[30px] h-[30px]">
                1
              </span>
              <img
                src="/images/icons/line.svg"
                className="w-[75%] max-w-[222px]"
                alt="line"
              />
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div>
                <h3 className="text-[19px] font-semibold mb-4">Sign up</h3>
                <p className="text-sm font-semibold leading-[22px]">
                  Simply select the right plan for your needs and tap to get
                  indexing sites in under 60 seconds. We make it that easy.
                </p>
              </div>
              <img src="/images/icons/line-2.png" alt="line" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <span className="text-[#F3F4F6] font-semibold text-sm flex items-center justify-center bg-primary rounded-full w-[30px] h-[30px]">
                2
              </span>
              <img
                src="/images/icons/line.svg"
                className="w-[75%] max-w-[222px]"
                alt="line"
              />
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div>
                <h3 className="text-[19px] font-semibold mb-4">
                  Connect your Google <br />
                  Search Console account
                </h3>
                <p className="text-sm font-semibold leading-[22px]">
                  We integrate with Google Search Console in a single click so
                  you can start tracking your {`site's`} indexing and ranking
                  progress right away, no hassle
                </p>
              </div>
              <img
                src="/images/icons/line-2.png"
                className="hidden md:block"
                alt="line"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <span className="text-[#F3F4F6] font-semibold text-sm flex items-center justify-center bg-primary rounded-full w-[30px] h-[30px]">
                3
              </span>
              <img
                src="/images/icons/line.svg"
                className="w-[75%] max-w-[222px]"
                alt="line"
              />
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div>
                <h3 className="text-[19px] font-semibold mb-4">
                  Add Website(s)
                </h3>
                <p className="text-sm font-semibold leading-[22px]">
                  Fast Setup - Add sites, connect sitemaps and accounts, turn on
                  auto-indexing. Our guided wizard simplifies initial
                  configuration with just a few fast clicks so you can start
                  ranking quicker.
                </p>
              </div>
              <img src="/images/icons/line-2.png" alt="line" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <span className="text-[#F3F4F6] font-semibold text-sm flex items-center justify-center bg-primary rounded-full w-[30px] h-[30px]">
                4
              </span>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div>
                <h3 className="text-[19px] font-semibold mb-4">
                  Submit and relax
                </h3>
                <p className="text-sm font-semibold leading-[22px]">
                  Hands-off Indexing - We review your site and automatically
                  submit not-yet-indexed URLs to Google on autopilot. No manual
                  submissions needed. Our tool handles the heavy lifting so you
                  can set it and forget it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
