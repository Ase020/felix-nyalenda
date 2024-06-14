import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

function Experience() {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-slate-800"
            duration={Math.floor(Math.random() * 10_000) + 10_000}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={title}
                className="lg:w-32 md:w-20 w-16"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>

                <p className="text-start text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Experience;
