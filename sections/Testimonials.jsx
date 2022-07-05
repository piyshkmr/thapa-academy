import Heading from "../components/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

const testimonials = [
  {
    name: "Linus Torvalds",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQGyj5c_i9gBJQ/profile-displayphoto-shrink_200_200/0/1517750831804?e=1657756800&v=beta&t=OFE4fxUNaoAn26Nn2FyjL3BNb8UQAgrC8YWVxZl6a6w",
    text: "Hey, i hope you guys know me. It's an awesome platform to learn coding i developed linux after taking c programming languages course from thapa academy.",
  },
  {
    name: "Mark Zukerberg",
    img: "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg",
    text: "I just launched metaverse after learning from thapa academy. The courses are very good quality and cheap. The instructor vinod bahadur thapa is also very good his teaching style is very awesome.",
  },
  {
    name: "Bill Gates",
    img: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    text: "Bro don't think just take the course its awesome no more words to say just go and buy.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Heading text={"Testimonials"} />
      <div className="container">
        <Splide aria-label="testimonials">
          {testimonials.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="text-center my-24">
                  <div className="flex justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 rounded-full opacity-80 mb-2"
                    />
                  </div>
                  <h3 className="md:text-xl text-lg font-bold">{item.name}</h3>
                  <div className="flex justify-center">
                    <MdStar className="text-star" />
                    <MdStar className="text-star" />
                    <MdStar className="text-star" />
                    <MdStar className="text-star" />
                    <MdStarHalf className="text-star" />
                  </div>
                  <p className="xl:w-1/2 md:w-3/4 w-4/5 mx-auto md:text-lg text-base mt-12">
                    {item.text}
                  </p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
