const NavLink = ({ text, to }) => {
  return (
    <li className="mb-4 xl:mb-0">
      <a
        className="md:text-lg text-base  hover:text-primary transition-colors cursor-pointer"
        href={to}
      >
        {text}
      </a>
    </li>
  );
};

export default NavLink;
