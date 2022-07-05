import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="lg:grid items-center gap-4 mt-6 grid-cols-2">
        <div className="text-center lg:text-left mx-auto">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-black">
            Education in your Hand
          </h1>
          <p className="mt-4 mb-8 lg:text-xl md:text-lg text-base ">
            In this modern era of technology if you also want to gain some
            skills or if you want to land your dream job in top tech companies
            than you are at right place.
          </p>

          <Button text={"Explore Courses"} />
        </div>
        <div className="hidden lg:block">
          <img
            id="hero-img"
            className="object-cover  -rotate-6 p-6 w-full h-full"
            src="/hero.svg"
            alt="hero image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
