import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[45vw]">
          Ready to take<span className="text-purple"> your </span>digital
          presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out me today and let&apos;s discuss how I can help you achieve
          your goals.
        </p>

        <a href="mailto:felix5olali@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map(({ id, img }) => (
            <div
              className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={id}
            >
              <Image src={img} alt={img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
