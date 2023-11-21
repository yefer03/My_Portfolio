// assets
// import homePageIllustation from "../assets/hero-illustration.svg";
import homePageIllustation from "../assets/figura1.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from '../utils/transition';
import { fadeIn, scale } from "../utils/variants";
import { Cover } from "../components/Cover";


const Hero = () => {

  const downloadCV = () => {
    const cvUrl = process.env.PUBLIC_URL + "/HV_page.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.target = "_blank";
    link.download = "CV_PAGE.pdf";
    link.click();
  };

  return <>
    <Cover />

    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative z-100"
    >


      <div className="max-w-screen-2xl flex flex-col
        xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">

          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className=" z-100 w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl 
            lg:text-6xl font-bold text-textPrimary uppercase"
          >
            Hello, I'm a...
            <br />
            <span className="text-secondary">
              <Typewriter
                words={['Web developer', 'Student', 'Passionate backend',]}
                cursor
                cursorStyle='█'
                typeSpeed={200}
                deleteSpeed={80}
                loop
              />
            </span>
          </motion.h1 >

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-16 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button secondary>Hire me</Button>
            <Button onClick={downloadCV} icon={downloadIcon}>Download CV</Button>
          </motion.div>

        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[501px]"
        />

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />

    </div>

  </>

};

export default Hero;
