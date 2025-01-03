import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-8 mt-10">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-5 object-cover border-4 border-blue-500"
          src="ms.jpg"
          alt="Mahwash Zahra"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">Mahwash Zahra</h3>
          <p className="text-sm text-blue-600">
            M.Sc, B.Sc Hons, B.ed | AI Innovator | Front-End Specialist
          </p>
        </div>
      </div>

      <p className="mt-5 text-gray-700 text-justify leading-loose">
        Mahwash Zahra is a dedicated professional with an impressive academic
        background, holding an M.Sc, B.Sc (Hons), and B.Ed. As a skilled
        frontend developer, she excels in designing and developing modern,
        user-centric web applications. With expertise in technologies like HTML,
        CSS, JavaScript, and frameworks such as Next.js, she combines her
        technical proficiency and creative approach to deliver seamless and
        visually appealing digital experiences.
      </p>

      <div className="mt-6 flex justify-around">
        <a
          href="https://twitter.com/YourTwitterHandle" // Replace with your actual Twitter handle
          className="px-5 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition transform hover:-translate-y-1"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com" // Replace with your LinkedIn profile link
          className="px-5 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition transform hover:-translate-y-1"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com" // Replace with your GitHub profile link
          className="px-5 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition transform hover:-translate-y-1"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
