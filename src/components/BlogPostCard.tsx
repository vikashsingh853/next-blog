import React from "react";
import Link from "next/link";

interface BlogPostCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  variant?: "default" | "featured";
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  variant = "default"
}) => {
  const isFeatured = variant === "featured";
  
  return (
    <Link 
      href={`/blog/${id}`} 
      className={`group ${isFeatured ? "md:col-span-2" : ""}`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`${isFeatured ? "md:flex" : ""}`}>
          <div className={`${isFeatured ? "md:w-1/2" : ""} h-48 bg-gray-200 relative`}>
            {/* Image would go here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className={`p-6 ${isFeatured ? "md:w-1/2" : ""}`}>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
            <h2 className={`${isFeatured ? "text-2xl" : "text-xl"} font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors`}>
              {title}
            </h2>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-600">{category}</span>
              <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard; 