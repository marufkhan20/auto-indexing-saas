"use client";
import Main from "@/components/Main";
import BlogItem from "@/components/shared/BlogItem";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Loading from "@/components/shared/Loading";
import { getAuthors, getPosts } from "@/lib/posts";
import { useEffect, useState } from "react";

const BlogPage = () => {
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
    <Main>
      <Header />
      <main className="py-12 mt-[70px] px-5 sm:px-0 min-h-[83vh]">
        <div className="container">
          {isLoading && <Loading type="secondary" />}
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {!isLoading && posts?.length > 0 ? (
              posts?.map((blog, idx) => (
                <BlogItem
                  author={author}
                  key={blog?.id}
                  data={blog}
                  idx={idx}
                />
              ))
            ) : (
              <span>Post Not found!!</span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Main>
  );
};

export default BlogPage;
