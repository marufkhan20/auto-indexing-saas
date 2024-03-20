import Link from "next/link";
import Button from "../ui/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <section
      className="pt-16 pb-[112px] relative px-5 sm:px-0"
      style={{ backgroundImage: `url(/images/hero/hero-vector.png)` }}
      id="features"
    >
      <div className="container-custom">
        <div>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] 2xl:text-[55px] md:leading-[70px] text-center">
            Website Indexing on Steroids.
          </h2>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] 2xl:text-[55px] md:leading-[70px] text-center w-full md:w-[85%] xl:w-[75%] mx-auto">
            You Blinked and We Already Indexed Your Site.{" "}
          </h2>
          <p className="text-[18px] text-center w-full sm:w-[75%] mx-auto leading-[24px] mt-5">
            Get to the Top of Google Faster Than You Can Spell GetIndexedFast.
            Site Indexing on Autopilot - Because Babysitting Search Engines is
            for Suckers. Get indexed in less than 24h.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <div className="border border-primary rounded-full">
              <Button className="m-1 flex items-center gap-[10px] get-started">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4.14121 10.1565C4.0961 10.2042 4.06084 10.2604 4.03743 10.3218C4.01402 10.3831 4.00293 10.4485 4.00479 10.5141C4.00664 10.5798 4.02141 10.6444 4.04825 10.7044C4.07509 10.7643 4.11348 10.8184 4.16121 10.8635C4.20895 10.9086 4.2651 10.9439 4.32646 10.9673C4.38783 10.9907 4.4532 11.0018 4.51885 10.9999C4.5845 10.9981 4.64915 10.9833 4.70909 10.9565C4.76903 10.9296 4.8231 10.8912 4.86821 10.8435L9.11821 6.3435C9.20598 6.25066 9.25488 6.12775 9.25488 6C9.25488 5.87224 9.20598 5.74933 9.11821 5.6565L4.86821 1.156C4.8234 1.10722 4.76934 1.06782 4.70918 1.04011C4.64902 1.0124 4.58395 0.996919 4.51775 0.994567C4.45155 0.992216 4.38555 1.00304 4.32357 1.02641C4.26159 1.04979 4.20487 1.08524 4.15671 1.13072C4.10855 1.17619 4.06991 1.23079 4.04302 1.29133C4.01614 1.35187 4.00156 1.41714 4.00011 1.48337C3.99867 1.54959 4.0104 1.61544 4.03462 1.67709C4.05885 1.73874 4.09508 1.79497 4.14121 1.8425L8.06721 6L4.14121 10.1565Z"
                    // fill="white"
                  />
                </svg>
              </Button>
            </div>
            <Button type="unknown" className="flex items-center gap-[10px]">
              <span>How it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M4.14121 10.1565C4.0961 10.2042 4.06084 10.2604 4.03743 10.3218C4.01402 10.3831 4.00293 10.4485 4.00479 10.5141C4.00664 10.5798 4.02141 10.6444 4.04825 10.7044C4.07509 10.7643 4.11348 10.8184 4.16121 10.8635C4.20895 10.9086 4.2651 10.9439 4.32646 10.9673C4.38783 10.9907 4.4532 11.0018 4.51885 10.9999C4.5845 10.9981 4.64915 10.9833 4.70909 10.9565C4.76903 10.9296 4.8231 10.8912 4.86821 10.8435L9.11821 6.3435C9.20598 6.25066 9.25488 6.12775 9.25488 6C9.25488 5.87224 9.20598 5.74933 9.11821 5.6565L4.86821 1.156C4.8234 1.10722 4.76934 1.06782 4.70918 1.04011C4.64902 1.0124 4.58395 0.996919 4.51775 0.994567C4.45155 0.992216 4.38555 1.00304 4.32357 1.02641C4.26159 1.04979 4.20487 1.08524 4.15671 1.13072C4.10855 1.17619 4.06991 1.23079 4.04302 1.29133C4.01614 1.35187 4.00156 1.41714 4.00011 1.48337C3.99867 1.54959 4.0104 1.61544 4.03462 1.67709C4.05885 1.73874 4.09508 1.79497 4.14121 1.8425L8.06721 6L4.14121 10.1565Z"
                  fill="#0e4c2e"
                />
              </svg>
            </Button>
          </div>
          <div className="flex justify-center mt-[50px]">
            <img src="/images/hero/hero-image.png" alt="hero image" />
          </div>
        </div>

        <div className="mt-28 text-center">
          <p className="text-lg">
            Powering rapid indexing for some of the fastest growing websites
            online
          </p>

          <div className="mt-10 flex justify-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              autoplay={{
                delay: 100,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                646: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1250: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <Link href="/">
                  <img src="/images/hero/brand-1.png" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img src="/images/hero/brand-2.svg" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img src="/images/hero/brand-3.svg" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link href="/">
                  <img src="/images/hero/brand-4.png" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link href="/">
                  <img src="/images/hero/brand-5.png" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link href="/">
                  <img src="/images/hero/brand-6.png" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link href="/">
                  <img src="/images/hero/brand-7.png" alt="brand" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link href="/">
                  <img src="/images/hero/brand-8.png" alt="brand" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 bg-light-primary"></div>
    </section>
  );
};

export default Hero;
