import React from "react";
import Link from "next/link";

// Mock data - in a real app, this would come from your CMS or API
const getPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "Getting Started with Next.js",
      content: `
        <h2>Introduction to Next.js</h2>
        <p>Next.js is a powerful React framework that enables server-side rendering and static site generation for React applications. It's built on top of React and provides a great developer experience with features like:</p>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-based routing</li>
          <li>Built-in CSS and Sass support</li>
        </ul>
        <h2>Why Choose Next.js?</h2>
        <p>Next.js provides an excellent developer experience with features like hot module replacement, automatic code splitting, and optimized production builds. It's perfect for building modern web applications that need to be fast, SEO-friendly, and scalable.</p>
      `,
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Development",
      author: {
        name: "John Doe",
        avatar: "/authors/john.jpg",
        bio: "Senior Developer at Tech Corp"
      }
    }
  };
  return posts[id as keyof typeof posts];
};

const BlogPost = ({ params }: { params: { id: string } }) => {
  const post = getPost(params.id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-96 bg-gray-200 relative">
          {/* Featured image would go here */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span className="text-blue-600">{post.category}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
              {/* Author avatar would go here */}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.bio}</p>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Related posts would go here */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
