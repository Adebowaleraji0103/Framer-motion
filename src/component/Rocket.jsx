import RocketImage from "./RocketImage";
import { motion } from "framer-motion";

const Rocket = () => {
  return (
    <div
      className="flex justify-center flex-col text-white mt-9 text-center font-bold text-5xl "
      id="rocket"
    >
      <motion.h1 animate={{ color: "red" }} className="mb-[3rem]">
        Rocket
      </motion.h1>
      <RocketImage />
    </div>
  );
};

export default Rocket;
