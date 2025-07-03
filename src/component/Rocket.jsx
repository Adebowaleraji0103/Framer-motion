import RocketImage from "./RocketImage";
const Rocket = () => {
  return (
    <div>
      <div
        className="flex justify-center flex-col text-center font-bold text-5xl "
        id="rocket"
      >
        <h1 className="mb-[3rem]">Rocket</h1>
        <RocketImage />
      </div>
    </div>
  );
};

export default Rocket;
