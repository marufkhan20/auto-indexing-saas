import parse from "html-react-parser";
import Link from "next/link";

const BlogItem = ({ data, author }) => {
  const {
    title,
    feature_image,
    published_at,
    reading_time,
    featured,
    slug,
    html: description,
  } = data || {};
  const { name, position = "Author", profile_image: avatar } = author || {};

  return featured ? (
    <Link
      href={`/blog/${slug}`}
      className="sm:col-span-2 md:col-span-3 flex gap-11 md:items-center flex-col md:flex-row w-full"
    >
      <div className="w-full md:w-[60%]">
        <img
          src={feature_image}
          className="w-full rounded-[20px]"
          alt="thumbnail"
        />
      </div>
      <div className="w-full md:w-[40%]">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">
            {published_at?.split("T")[0]}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="1.99951" r="2" fill="#0E4C2E" />
          </svg>
          <span className="text-sm font-semibold">
            {reading_time} minute read
          </span>
        </div>
        <h2 className="text-[22px] sm:text-[28px] font-semibold leading-[42px] mt-5">
          {title}
        </h2>
        <p className="text-base font-semibold leading-[24px] mt-5">
          {description && parse(description?.slice(0, 600))}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <img
            className="w-[48px] h-[48px] rounded-full"
            src={avatar || "/images/blog/author-4.svg"}
            alt="avatar"
          />
          <div>
            <h3 className="text-base font-semibold mb-2">{name}</h3>
            <span className="text-xs font-semibold">{position}</span>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link href={`/blog/${slug}`}>
      <div>
        <img
          src={feature_image}
          className="w-full rounded-[20px]"
          alt="thumbnail"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-[20px] font-semibold leading-[42px]">{title}</h2>
        <p className="text-sm font-semibold leading-[24px] mt-4">
          {description && parse(description?.slice(0, 200))}
        </p>
        <div className="flex items-center mt-4 gap-3">
          <div className="flex items-center gap-3">
            <img
              className="w-7 h-7 rounded-full"
              src={avatar || "/images/blog/author-4.svg"}
              alt="avatar"
            />
            <h3 className="text-sm font-semibold">{name}</h3>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="1.99951" r="2" fill="#0E4C2E" />
          </svg>

          <span className="text-sm font-semibold">
            {reading_time} minute read
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
