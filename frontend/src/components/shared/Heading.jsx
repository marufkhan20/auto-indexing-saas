import { cn } from "@/lib/utills";

const Heading = ({ title, subTitle, center, classname }) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-4 ${
          center && "justify-center items-center text-center"
        }`,
        classname
      )}
    >
      {title && (
        <h2 className="text-[30px] sm:text-[35px] md:text-[45px] md:leading-[55px]">
          {title}
        </h2>
      )}
      {subTitle && <p className="font-semibold">{subTitle}</p>}
    </div>
  );
};

export default Heading;
