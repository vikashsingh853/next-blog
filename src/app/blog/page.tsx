import React from "react";
import Link from "next/link";

// Mock data - in a real app, this would come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development",
    image: "/blog/nextjs.jpg"
  },
  {
    id: 2,
    title: "The Power of TypeScript",
    excerpt: "Discover how TypeScript can improve your development workflow.",
    date: "2024-03-10",
    readTime: "4 min read",
    category: "Development",
    image: "/blog/typescript.jpg"
  },
  {
    id: 3,
    title: "Modern CSS Techniques",
    excerpt: "Explore the latest CSS features and best practices.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Design",
    image: "/blog/css.jpg"
  }
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Insights, tutorials, and updates from our team
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            href={`/blog/${post.id}`} 
            key={post.id}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Image would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
