import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const FAQItem = ({ question, answer }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="border-b border-dark">
      <div
        onClick={() => setIsShow(!isShow)}
        className="flex justify-between cursor-pointer bg-card p-8"
      >
        <h3 className="md:text-xl text-lg font-bold">👉 {question} ?</h3>
        {isShow ? (
          <MdOutlineArrowDropUp size={34} />
        ) : (
          <MdOutlineArrowDropDown size={34} />
        )}
      </div>
      {isShow && (
        <p className={`md:text-lg text-base bg-cardLight p-6`}>{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
