import React from "react";

const BlogPost = ({ params }: { params: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2>Blog post details</h2>
      <h1>{params.id}</h1>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse vero ad
        magni repellendus veniam quam eum, rerum vel aliquam dolore. Animi
        facere alias eius? Maiores incidunt eos hic repellat ducimus.
      </h3>
    </div>
  );
};

export default BlogPost;
