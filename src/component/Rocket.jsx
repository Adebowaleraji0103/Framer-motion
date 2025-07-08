import RocketImage from "./RocketImage";
import { hover, motion } from "framer-motion";

const Rocket = () => {
  const buttonVariant = {
    hover: {
      scale: [1, 1.2, 1, 1.2, 1 ,1.2],
      boxShadow: "3px 3px 3px lightblue",
      color: "yellow",
    },
  };
  return (
    <div>
      <div
        className="flex justify-center flex-col text-white mt-9 text-center font-bold text-5xl "
        id="rocket"
      >
        <motion.h1 animate={{ color: "red" }} className="mb-[3rem]">
          Rocket
        </motion.h1>
        <RocketImage />
      </div>

      <div className="flex justify-center">
        <motion.button
          className="bg-white rounded-[15px] font-bold w-fit text-black px-6 py-2 text-[20px]"
          initial={{ x: 10, opacity: 0 }}
          animate={{ color: "red", x: 0, opacity: 1 }}
          transition={{
            delay: 3,
            duration: 5,
            type: "spring",
            stiffness: 1200,
          }}
        >
          Hello
        </motion.button>
      </div>
      <div className="flex justify-center mt-8 mb-20">
        <motion.button
          className=" text-white bg-[blue] px-5 py-2 font-bold w-fit text-[20px] rounded-[10px]"
          variants={buttonVariant}
          whileHover= "hover"
        >
          Welcome
        </motion.button>
      </div>
    </div>
  );
};

export default Rocket;
