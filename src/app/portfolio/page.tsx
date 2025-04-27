import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | My Projects & Technical Skills",
  description: "Explore my portfolio showcasing web development projects, technical skills, and professional experience. From e-commerce platforms to modern web applications.",
  keywords: ["portfolio", "web development", "projects", "technical skills", "developer", "programming"],
  openGraph: {
    title: "My Portfolio - Projects & Technical Skills",
    description: "Explore my portfolio showcasing web development projects, technical skills, and professional experience.",
    url: "https://yourdomain.com/portfolio",
    siteName: "My Portfolio",
    images: [
      {
        url: "/portfolio-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio - Projects & Technical Skills",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio - Projects & Technical Skills",
    description: "Explore my portfolio showcasing web development projects, technical skills, and professional experience.",
    images: ["/portfolio-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/portfolio",
  },
};

const PortfolioPage = () => {
  // Mock data - in a real app, this would come from your API
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      image: "/portfolio/ecommerce.jpg",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/portfolio/taskapp.jpg",
      tags: ["React", "Firebase", "Material UI"],
      link: "https://example.com/taskapp"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A weather application with real-time data and forecasts.",
      image: "/portfolio/weather.jpg",
      tags: ["React", "OpenWeather API", "Chart.js"],
      link: "https://example.com/weather"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">My</span>{' '}
                  <span className="block text-blue-600 dark:text-blue-400 xl:inline">Portfolio</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A collection of my recent projects and technical skills. Each project represents a unique challenge and learning opportunity.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full object-cover bg-gray-200 dark:bg-gray-700">
                  {/* Project image would go here */}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    href={project.link}
                    className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Here's a comprehensive list of my technical skills and expertise.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {skillCategory.category}
                </h3>
                <ul className="space-y-3">
                  {skillCategory.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to work together?</span>
            <span className="block text-blue-200 dark:text-blue-300">Let's build something amazing.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 dark:text-blue-900 bg-white hover:bg-blue-50 dark:hover:bg-blue-100"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
