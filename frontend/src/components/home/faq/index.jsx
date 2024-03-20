import faqData from "@/data/faqData";
import Heading from "../../shared/Heading";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section id="faq" className="py-[100px] bg-light-primary px-5 sm:px-0">
      <div className="container-custom">
        <Heading title="Frequently ask questions" center />

        <div className="mt-10 flex flex-col gap-6">
          {faqData?.map((faq) => (
            <FaqItem key={faq?.id} data={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
