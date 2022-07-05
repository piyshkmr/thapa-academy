import FAQItem from "../components/FAQItem";
import Heading from "../components/Heading";

const FAQ = () => {
  const faqs = [
    {
      question: "Can i get a free demo of the course",
      answer:
        "Yes, why not every course has some demo videos which are free to watch you can watch those videos for free and then you can decide whether this course is for you or not.",
    },
    {
      question: "Did you accept paytm for payment",
      answer:
        "Yes, we accept all payment methods like netbaking paytm google pay or you can also pay via debit or credit card.",
    },
    {
      question: "Can i take refund if i don't like the course",
      answer:
        "Yes, ofcourse our all courses are 100% refundable , but you have to apply for refund within 7 days of purchase in order to get the refund otherwise you will be not eligible for refund.",
    },
    {
      question:
        "Where can i use the cerficates which you gave after the complition",
      answer:
        "You can attach the course completion certificates in your resume in your skills or achivement section or you can post to your linkedin profile to showcase your skills.",
    },
  ];

  return (
    <section id="faq">
      <Heading text={"FAQS"} />
      <div className="container">
        <div className="rounded-2xl overflow-hidden">
          {faqs.map((item, index) => {
            return (
              <FAQItem
                question={item.question}
                answer={item.answer}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
