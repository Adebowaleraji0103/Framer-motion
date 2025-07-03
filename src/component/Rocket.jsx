import RocketImage from "./RocketImage";
import { motion } from "framer-motion";

const Rocket = () => {
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
        <motion.button className="bg-white rounded-[15px] font-bold w-fit text-black px-6 py-2 text-[20px]">
          Hello
        </motion.button>
      </div>
    </div>
  );
};

export default Rocket;
