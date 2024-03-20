"use client";
import Main from "@/components/Main";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Loading from "@/components/shared/Loading";
import { getSinglePost } from "@/lib/posts";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      (async () => {
        setIsLoading(true);
        const postData = await getSinglePost(slug);

        setPost(postData);
        setIsLoading(false);
      })();
    }
  }, [slug]);

  const {
    title,
    feature_image,
    published_at,
    reading_time,
    featured,
    html: description,
  } = post || {};
  // const { name, position = "Author", profile_image: avatar } = author || {};
  return (
    <Main>
      <Header />
      <main className="py-12 mt-[70px] px-5 sm:px-0 min-h-[83vh]">
        <div className="container md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto">
          {isLoading && <Loading type="secondary" />}
          {!isLoading && !post && (
            <div className="w-full flex items-center justify-center">
              <span>Post Not Found!</span>
            </div>
          )}

          <div>
            <h2 className="text-[25px] sm:text-[35px] md:text-[45px] md:leading-[68px]">
              Tired of Flipping Between Tabs? Automate PDF Bank Statement to
              Excel Conversions Instead
            </h2>
            <p className="font-semibold mt-5">{published_at?.split("T")[0]}</p>
            <div>
              <img
                src={feature_image}
                alt="blog thumbnail"
                className="w-full my-5 rounded-lg"
              />
            </div>
            {description && parse(description)}
          </div>
        </div>
      </main>
      <Footer />
    </Main>
  );
};

export default SingleBlogPage;
