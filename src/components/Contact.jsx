import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4"
    >
      <div className="w-full max-w-xl text-center space-y-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Contact Information
        </h1>

        {/* Contact Details */}
        <div className="p-6 bg-white dark:bg-gray-700 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Mohd Rihan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            <strong>Phone:</strong> +91 8864842328
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            <strong>Current Location:</strong> Noida
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Aspiring React Developer with hands-on experience in building
            dynamic web applications using React and related technologies.
            Proficient in front-end development with a strong understanding of
            the MERN stack. Eager to contribute to innovative projects and grow
            in a tech environment.
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => (window.location.href = "mailto:abdulrehan.23456@gmail.com")}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
          >
            Email Me
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/mohd-rihan-03ab00242/", "_blank")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            LinkedIn Profile
          </button>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1aXhAN7re4k5JTAL7S8ggBUHa0ThzhIva/view?usp=drivesdk",
                "_blank"
              )
            }
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
