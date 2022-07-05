import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex md:py-8 py-4 mb-16 xl:mb-0 justify-between items-center">
      <h3 className="logo  md:text-2xl text-xl font-bold">Thapa Academy</h3>
      <ul
        className={`xl:flex xl:flex-1 2xl:flex-none xl:w-1/2 xl:relative xl:bg-transparent transition-all  w-full bg-card shadow-lg rounded-xl absolute left-0 z-10 p-12  xl:p-0 items-center justify-evenly ${
          isMenuOpen ? "top-0" : "-top-full"
        }`}
      >
        <div className="xl:hidden block absolute top-6 right-6 text-3xl cursor-pointer">
          <MdOutlineClose onClick={toggleMenu} />
        </div>
        <NavLink text={"Courses"} to="#courses" />
        <NavLink text={"Services"} to="#services" />
        <NavLink text={"FAQS"} to="#faq" />
        <NavLink text={"Testimonials"} to="#testimonials" />
        <NavLink text={"Contact"} to="#contact" />

        <li>
          <a className="" href="">
            <Button style={"px-4 py-2.5"} text={"Join us"} />
          </a>
        </li>
      </ul>
      <div className="xl:hidden block text-3xl cursor-pointer">
        <MdMenu onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
