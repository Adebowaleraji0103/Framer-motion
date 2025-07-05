import { motion } from "framer-motion";

function RocketImage() {
  return (
    <div className="flex justify-center gap-10 mb-[6rem]">
      <div className="w-[250px] h-[270px] p-5 border-2 rounded-4xl border-zinc-700 bg-zinc-50 text-[1.7rem] text-zinc-500 items-center flex justify-center flex-col gap-3">
        <img className="w-[11rem]" src="./images/Robot-1.png" alt="" />
        <p>Explorer</p>
        <span>$</span>
      </div>

      <div className="w-[250px] h-[270px] p-5 border-2 rounded-4xl border-zinc-700 bg-zinc-50 text-[1.7rem] text-zinc-500 items-center flex justify-center flex-col gap-3">
        <img className="w-[9rem]" src="./images/Robot-2.png" alt="" />
        <p>Adventurer</p>
        <span>$$</span>
      </div>

      <div className="w-[250px] h-[270px] p-5 border-2 rounded-4xl border-zinc-700 bg-zinc-50 text-[1.7rem] text-zinc-500 items-center flex justify-center flex-col gap-3">
        <img className="w-[9rem]" src="./images/Robot-3.png" alt="" />
        <p>Infinty</p>
        <span>$$$</span>
      </div>
    </div>
  );
}
export default RocketImage;
