import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            bgColor="bg-gray-100"
            title="For Developers"
            description="Browse our React jobs and start your career today"
            link="/jobs"
            buttonText="Browse Jobs"
            buttonBgColor="bg-black"
            buttonHoverColor="hover:bg-gray-700"
          />
          <Card
            bgColor="bg-indigo-100"
            title="For Employers"
            description="List your job to find the perfect developer for the role"
            link="/add-job"
            buttonText="Add Job"
            buttonBgColor="bg-indigo-500"
            buttonHoverColor="hover:bg-indigo-600"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
