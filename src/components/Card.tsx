// react
import { FC } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  url: string;
}

const Card: FC<CardProps> = ({ imgSrc, title, url }) => {

  const handleCardClick = () => {
    // Abrir la URL cuando se hace clic en la tarjeta
    window.open(url, '_blank');
  };

  return (
    <div
      className="relative group flex items-center justify-center py-6 px-8 bg-accent
        hover:bg-hoverPrimary flex-1 cursor-pointer h-[105px] xs:h-[145px] min-w-fit sm:min-w-[330px]
        max-w-[448px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out"
      onClick={handleCardClick}
    >
      <img src={imgSrc} alt="" className="transition-all duration-700 backdrop-blur-0 group-hover:scale-105 ease-in-out max-h-[110px]" />

      <p className="text-secondary absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:top-0.5 group-hover:opacity-100
        transition-all duration-500 ease-in-out text-center w-full px-8 text-lg sm:text-xl z-10 font-bold"
      >
        {title}
      </p>
    </div>
  );
};

export default Card;
