import CourseCard from "../components/CourseCard";
import Heading from "../components/Heading";

const Courses = () => {
  const courses = [
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
      title: "React JS Tutorial in Hindi 2021",
      img: "https://i.ytimg.com/vi/tiLWCNFzThE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA5TXO4v9OLbk14ZV1Ev7f41EM9rw",
      price: 1399,
      discountedPrice: 999,
      publisher: "Vinod Bahadur Thapa",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc",
      title: "MERN STACK In Hindi 2021",
      img: "https://i.ytimg.com/vi/fSmp7Cv-c_0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjQUFW5rFjAMgETLuMqetLBUNw2Q",
      price: 1999,
      discountedPrice: 699,
      publisher: "Vinod Bahadur Thapa",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2rDbpfKAeUi9f8qZMS7_cv",
      title: "Next.JS Tutorial In Hindi 2021",
      img: "https://i.ytimg.com/vi/2OaAbSgmIWo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA9V7RBhrQE5XAgKauNopZ9kiXaJQ",
      price: 1650,
      discountedPrice: 599,
      publisher: "Vinod Bahadur Thapa",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3l8tWTcB7R7Bsgd86lCa8a",
      title: "Tailwind CSS In Hindi",
      img: "https://i.ytimg.com/vi/hBj1vbzvHhM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBn7lsufF_MmGZ3ZUdvIQf5_U5edA",
      price: 1099,
      discountedPrice: 799,
      publisher: "Vinod Bahadur Thapa",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3Vqww2cL5KbDkShj4NMRzk",
      title: "Express JS Tutorial In Hindi in 2020",
      img: "https://i.ytimg.com/vi/CgoD3HX1lWY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBC1Y4XOf3dxXhPxx_k6ocoWl6uQ",
      price: 1999,
      discountedPrice: 899,
      publisher: "Vinod Bahadur Thapa",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
      title: "NodeJS Tutorial in Hindi 2020",
      img: "https://i.ytimg.com/vi/IIpiLZGTWuo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA210DGCC2x07Ybl39ze4_crWrYLg",
      price: 1299,
      discountedPrice: 799,
      publisher: "Vinod Bahadur Thapa",
    },
  ];

  return (
    <section id="courses">
      <Heading text={"Our Bestselling Courses"} />
      <div className="container">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
          {courses.map((item, index) => {
            return <CourseCard item={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
