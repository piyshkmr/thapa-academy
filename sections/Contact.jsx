import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";

const contact = () => {
  return (
    <section id="contact">
      <Heading text={"Contact Us"} />
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12">
          <form>
            <Input placeholder={"Name"} type="text" />
            <Input placeholder={"Email"} type="email" />
            <textarea
              className="px-8 py-6 focus:border-primary focus:border-2 text-lg resize-none  block w-full bg-card outline-none rounded-xl mb-8"
              placeholder="Message"
              required
              rows={4}
            ></textarea>
            <Button text={"Send"} />
          </form>
          <div>
            <img
              id="hero-img"
              className="object-cover lg:block hidden  -rotate-6 p-6 w-full h-full"
              src="/contact.svg"
              alt="contact image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
