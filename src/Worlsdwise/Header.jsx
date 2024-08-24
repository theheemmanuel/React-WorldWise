import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around py-6 items-center">
      <img src={Logo} alt="logo" className="h-12" />
      <div className="flex gap-2">
        <Link to="/login">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600">
            LOGIN
          </button>
        </Link>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600">
          PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default Header;
