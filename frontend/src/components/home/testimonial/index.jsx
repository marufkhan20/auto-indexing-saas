import Heading from "@/components/shared/Heading";
import feedbackData from "@/data/feedbackData";
import Link from "next/link";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <section className="pt-[100px] bg-light-primary px-5 sm:px-0">
      <div className="container-custom">
        <Heading
          title="Wall of Love"
          subTitle="Why Leading Companies Index Using GetIndexedFast"
          center
        />
        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {feedbackData?.map((item) => (
            <TestimonialItem key={item?.id} data={item} />
          ))}
        </div>
        <div className="bg-white w-full h-40 -mt-40 blur-lg opacity-80"></div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="font-bold transition-all hover:text-primary"
          >
            See more..
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
