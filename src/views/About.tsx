
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import aboutPageIllustation from "../assets/figura2.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { scale } from '../utils/variants';
import { transition } from "../utils/transition";

const About = () => {
  return (

    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between 
        items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>

            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px]
                font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>

          </Reveal>
          
          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary font-bold">
            I am Yeferson, a web developer with expertise in Node.js and React.js. My primary focus lies in building robust and scalable backend systems, but I also possess strong skills in frontend development. My passion revolves around problem-solving and crafting efficient and secure web applications. I strive to stay up-to-date with the latest technologies and am always eager to learn and tackle new challenges.
            </p>
          </Reveal>
          

          <motion.div 
            transition={ transition() }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: false } }
            className="flex items-center justify-center xl:justify-start gap-6 "
          >
            <SocialMediaIcon
              link="https://github.com/yefer03"
              imgSrc={ githubIcon }
              title="github"
            />
            

            <SocialMediaIcon
              link="https://www.linkedin.com/in/yeferson-serna-restrepo-659672256/"
              imgSrc={ linkedinIcon }
              title="linkedin"
            />

          </motion.div>

        </div>

        <div className="flex-1 flex items-center justify-center">

          <motion.img 
            variants={ scale() }
            transition={ transition() }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: false } }
            src={ aboutPageIllustation }
            alt="" 
            className="max-w-full sm:max-w-[501px]" />

        </div>



      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />

    </div>

  );
};

export default About;
