import React from "react";

const page = () => {
  return (
    <div>
      <section id="overview" className="flex flex-col gap-6 text-xl">
        <h2 className="--header-name text-3xl font-bold">Overview</h2>
        <p>
          Welcome to <span className="--header-name font-bold">Focus Forge</span>! a platform designed to help users improve
          focus, productivity, and overall well-being.
        </p>

        <p>
          Today's fast-paced world can make it challenging to stay focused on tasks and goals. Focus Forge aims to
          address this issue by providing users with tools and resources to enhance their concentration, motivation, and time management skills.
        </p>

        <p>
          Whether you're a student aiming to boost academic performance, a
          professional striving to excel in your career, or an individual
          seeking personal development, Focus Forge offers a range of
          features tailored to your needs.
        </p>

        <p>
          With Focus Forge, you can take control of your time,
          maximize your potential, and cultivate habits that lead to success.
        </p>
        <p>
          Future features include a habit tracker, a time management tool, and a to do list.
        </p>
      </section>
    </div>
  );
};

export default page;
