import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Blog post</h1>
      {[1, 2, 3, 4, 5, 6, 7].map((res, index) => {
        return (
          <article key={index} className="flex flex-col gap-4">
            <Link href={`/blog/${res}`}>{res}</Link>
          </article>
        );
      })}
    </div>
  );
};

export default Blog;
