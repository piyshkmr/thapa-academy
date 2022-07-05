const ServicesCard = ({ icon, title, style, body }) => {
  return (
    <div
      className={`flex md:text-left text-center  hover:scale-95 md:flex-row flex-col  transition-transform  px-12 py-6  rounded-3xl justify-between items-center  bg-card  ${style}`}
    >
      {icon}
      <div className="md:ml-6">
        <h3 className="md:text-2xl text-xl mb-2 font-bold">{title}</h3>
        <p className="md:text-lg text-base">{body}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
