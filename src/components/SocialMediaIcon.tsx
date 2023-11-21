// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";


interface SocialMediaIconProps {
  link: string;
  imgSrc: string;
  title: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ link, imgSrc, title }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-secondary transition-all ease-linear duration-300"
      >
        <img src={imgSrc} alt={title} />
      </div>
    </a>
  );
};


export default SocialMediaIcon;
