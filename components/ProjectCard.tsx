import React from "react";
import { PinContainer } from "./ui/3DPin";
import { FaLocationArrow } from "react-icons/fa6";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
  };
}

function ProjectCard({
  project: { id, title, des, img, iconLists, link },
}: ProjectCardProps) {
  return (
    <div
      className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
      key={id}
    >
      <PinContainer title={link} href={link}>
        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
          <div className="relative size-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
            <img src="/bg.png" alt="bg-img" className="" />
          </div>

          <img src={img} alt={title} className="z-10 absolute bottom-0" />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>

        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
          {des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                className="border border-white/[0.2] rounded-full bg-black-100 lg:size-10 size-8 flex items-center justify-center"
                key={icon}
                style={{
                  transform: `translateX(-${5 * index * 2}px)`,
                }}
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#cbacf9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard;
