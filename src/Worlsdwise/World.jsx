import { Link } from "react-router-dom";

const World = () => {
  const Body = {
    id: 1,
    name: "Emmanuel",
    age: 22,
    school: "Adeleke University",
  };
  console.log(Body);
  return (
    <div className="hero">
      <div className="text-center w-2/3 md:mx-auto">
        <h1 className="font-bold text-5xl py-8">
          You travel the world. <br /> WorldWise keeps track of your adventures
        </h1>
        <p className="text-lg my-8">
          A world map that track your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have explored the whole world.
        </p>
        <Link to="/app">
          <button className="text-xl bg-green-500 rounded-xl py-2 px-4 font-semibold my-8">
            START TRACKING NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default World;
