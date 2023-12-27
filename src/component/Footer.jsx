import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center ">
      <div className="">
        <Link to="/">
          <img
            src="./src/assets/images/pokemon.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <p className="text-gray-200">Footer</p>
    </div>
  );
};

export default Footer;
