import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";

const Home = () => {
  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <Hero />
      <Companies />
      <CoursesSection />
    </div>
  );
};

export default Home;
