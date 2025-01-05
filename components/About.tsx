"use client";
import React from "react";

const About = () => {
  return (
    <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-[90%] sm:max-w-[85%] md:max-w-4xl relative z-10">
      <div className="w-full py-4 sm:py-6 md:py-8">
        <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-12">
          About <span className="text-purple">Me</span>
        </h1>
        
        <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl border border-gray-200/20 shadow-xl p-4 sm:p-6 md:p-8">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              As a dedicated professional with a strong passion for technology and innovation, I, Akshun Chauhan, am currently working as a Data Analyst in Applied Research. My role involves seamlessly integrating data from IoT sensors to the cloud and utilizing Power BI to design interactive dashboards that transform complex data into actionable insights.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              I develop desktop and mobile applications to represent data, focusing on solar and environmental metrics. With a robust research background, I have contributed significantly to evaluating the efficiency of various solar configurations and advancing renewable energy systems.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              In 2019, I was honored with the prestigious &quot;All-Indian Science Competition&quot; award. My technical skills span database management systems including PostgreSQL, MySQL, Oracle Database (PL/SQL), and MongoDB (NoSQL). I am proficient in web development using ASP.NET and the MERN stack and have developed desktop applications using JavaFX.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              My hands-on experience with IoT projects includes working with Arduino, Raspberry Pi sensors, and servomotors, following the Software Development Life Cycle (SDLC) to ensure precision and reliability in my work.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              With expertise in cloud computing, particularly Microsoft Azure, and a deep curiosity for outer space and innovation, I am committed to pushing the boundaries of technology and creating meaningful solutions for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;