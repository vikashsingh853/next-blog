import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are passionate about creating meaningful content and sharing knowledge with our community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who We Are</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a team of dedicated professionals committed to delivering high-quality content and insights. 
            Our mission is to create a platform where knowledge meets creativity, and where ideas can flourish.
            We believe in the power of sharing and learning from each other.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What We Do</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We create engaging content, share valuable insights, and build a community of like-minded individuals.
            Our focus is on delivering meaningful experiences through our platform, helping people connect,
            learn, and grow together.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">We maintain high standards in everything we create.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
            <p className="text-gray-600 dark:text-gray-300">We believe in the power of connection and collaboration.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">We constantly seek new ways to improve and grow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
