  // react
  import { useState } from "react";

  // components
  import { Button, Card, Reveal } from "../components";

  // data
  import { projects } from '../data';

  // framer-motion
  import { motion } from "framer-motion";

  // utils
  import { fadeIn } from "../utils/variants";
  import { transition } from "../utils/transition";

    
  type Category = 'front' | 'back'


  const Projects = () => {

    const [activeCategory, setActiveCategory] = useState<Category>("front");

    const filteredProjects = () => {

      if (activeCategory === "front") {
        return projects.filter((item) => item.category === "front");
      } else {
        return projects.filter((item) => item.category === "back");
      }

    };

    return (
      <div id="projects" className="min-h-screen relative">
        <div className="max-w-screen-2xl w-full py-16 px-12  mx-auto">
          <div className="flex-1 flex flex-col gap-4">

            <Reveal>
              <h2
                className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px]
                  font-bold text-textPrimary"
              >
                My <span className="text-secondary"> projects</span>
              </h2>
            </Reveal>

            <p className="font-bold text-xl lg:text-left uppercase mt-4 mb-4 md:text-center">
              If you want to see my projects, they are all on github. 
            </p>

            <motion.div 
              variants={ fadeIn("up") }
              transition={ transition() }
              initial="hidden"
              whileInView="visible"
              viewport={ { once: false } }
              className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
            >

              <Button secondary={ activeCategory === 'front' ? true : false } onClick = { () => setActiveCategory('front') }>
                Frontend
              </Button>

              <Button secondary={ activeCategory === 'back' ? true : false } onClick = { () => setActiveCategory('back') }>
                Backend
              </Button>

            </motion.div>
            
            <motion.div 
              variants={ fadeIn("up") }
              transition={ transition() }
              initial="hidden"
              whileInView="visible"
              viewport={ { once: false } }
              className="flex gap-12 mt-12 flex-wrap justify-center"
            >
              { filteredProjects().map( (item) => (
                <Card imgSrc={item.img} title={item.title} url={item.url}/>
              ) ) }
            </motion.div>

          </div>
        </div>
      </div>
    )

  };



  export default Projects;
