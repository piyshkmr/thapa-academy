import { MdStar, MdStarHalf } from "react-icons/md";

const CourseCard = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noreferrer">
      <div className="hover:scale-95 p-4 cursor-pointer rounded-2xl transition-transform">
        <img
          src={item.img}
          alt={item.title}
          className="object-cover mb-4 rounded-xl opacity-90 w-full"
        />
        <h4 className="md:text-xl text-lg font-bold">{item.title}</h4>
        <small className="md:text-sm text-xs">{item.publisher}</small>
        <br />
        <small className="flex md:text-base text-sm  items-center">
          4.9
          <span className="flex mx-2 items-center">
            <MdStar className="text-star" />
            <MdStar className="text-star" />
            <MdStar className="text-star" />
            <MdStar className="text-star" />
            <MdStarHalf className="text-star" />
          </span>
          <span>(2,123)</span>
        </small>
        <p className="md:text-lg text-base font-medium">
          ₹{item.discountedPrice} &nbsp;{" "}
          <small className="line-through">₹{item.price}</small>
        </p>
      </div>
    </a>
  );
};

export default CourseCard;
