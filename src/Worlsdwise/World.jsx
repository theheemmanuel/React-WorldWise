import { Link } from "react-router-dom";
import Header from "./Header";

const World = () => {
  return (
    <div className="hero">
      <Header />
      <div className="text-center w-2/3 md:mx-auto">
        <h1 className="font-bold text-5xl py-8">
          You travel the world. <br /> WorldWise keeps track of your adventures
        </h1>
        <p className="text-lg my-8">
          A world map that track your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have explored the whole world.
        </p>
        <Link to="/login">
          <button className="text-xl bg-green-500 rounded-xl py-2 px-4 font-semibold my-8">
            START TRACKING NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default World;
