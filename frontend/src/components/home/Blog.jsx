"use client";
import Heading from "@/components/shared/Heading";
import { getAuthors, getPosts } from "@/lib/posts";
import { useEffect, useState } from "react";
import BlogItem from "../shared/BlogItem";
import Loading from "../shared/Loading";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const allPosts = await getPosts();
      const allAuthors = await getAuthors();

      if (allAuthors?.length > 0) {
        setAuthor(allAuthors[0]);
      }
      setPosts(allPosts);
      setIsLoading(false);
    })();
  }, []);
  return (
    <section className="pb-[100px] bg-light-primary px-5 sm:px-0">
      <div className="container-custom">
        <Heading title="Blog" center />
        {isLoading && <Loading type="secondary" />}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts?.length > 0 ? (
            posts?.length > 4 ? (
              posts
                ?.slice(0, 4)
                ?.map((blog, idx) => (
                  <BlogItem
                    author={author}
                    key={blog?.id}
                    data={blog}
                    idx={idx}
                  />
                ))
            ) : (
              posts?.map((blog, idx) => (
                <BlogItem
                  author={author}
                  key={blog?.id}
                  data={blog}
                  idx={idx}
                />
              ))
            )
          ) : (
            <span>Posts Not Found!!</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
