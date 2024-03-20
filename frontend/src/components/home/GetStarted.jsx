import Button from "../ui/Button";

const GetStarted = () => {
  return (
    <section className="pb-[100px] bg-light-primary sm:px-0 overflow-x-hidden">
      <div className="container-custom">
        <div className="p-10 pt-[100px] rounded-[24px] relative bg-[#0E4C2E] !z-30">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 flex">
            <img
              src="/images/get-started-vector.png"
              alt=""
              className="w-full opacity-5"
            />
            <img
              src="/images/get-started-vector.png"
              alt=""
              className="w-full opacity-5"
            />
          </div>

          <div className="!z-30">
            <h2 className="text-center mx-auto text-white text-xl leading-normal sm:text-[30px] md:text-[40px] w-full md:w-[70%] md:leading-[60px] mb-5">
              Get Your Website Indexed Faster Than The Flash Could Build
              Backlinks
            </h2>
            <p className="text-center w-full text-white mx-auto md:w-[70%]">
              Finally Get the Unfair Organic Advantage You Crave as Google
              Indexes Your Content at Warp Speed Leading to a Bright Future of
              Explosive Organic Traffic Growth.
            </p>
            <div className="mt-10 flex justify-center">
              <Button type="unknown" className="text-[#0E4C2E] bg-white px-10">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
