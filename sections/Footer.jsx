import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-12 ">
      <h3 className="md:text-3xl text-2xl font-bold mb-8">Follow Us</h3>
      <div className="flex items-center mb-12 justify-center">
        <a target={"_blank"} href="https://www.facebook.com/vinodthapa55">
          <MdFacebook className="text-gray-200  hover:text-primary transition-colors   mr-4 text-4xl" />
        </a>
        <a target={"_blank"} href="https://www.instagram.com/thapatechnical/">
          <FaInstagram className="text-gray-200  hover:text-primary transition-colors   mr-4 text-4xl" />
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/vinod-thapa-45880ab8/"
        >
          <FaLinkedin className="text-gray-200  hover:text-primary transition-colors  mr-4  text-4xl" />
        </a>
        <a target={"_blank"} href="https://www.youtube.com/c/ThapaTechnical">
          <FaYoutube className="text-gray-200  hover:text-primary transition-colors   mr-4 text-4xl" />
        </a>
      </div>
      <p className="md:text-lg text-base  mb-2">Terms of use. Privacy Policy</p>
      <p className="md:text-lg text-base opacity-80">@ 2022 Thapa Academy</p>
    </footer>
  );
};

export default Footer;
