import Heading from "../components/Heading";
import { MdHourglassFull, MdSchool, MdAttachMoney, MdHd } from "react-icons/md";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <section id="services">
      <Heading text={"Services"} />
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-12">
          <ServicesCard
            icon={
              <MdHourglassFull className="md:text-9xl text-6xl md:mb-0 mb-4" />
            }
            title={"Lifetime access"}
            body={
              "Our courses has no expiration date you can purchase our course and watch without any tension of validity but don't forget your password :) just joking"
            }
          />
          <ServicesCard
            icon={
              <MdAttachMoney className="md:text-9xl text-6xl md:mb-0 mb-4" />
            }
            title={"Easy Refund"}
            body={
              "Our courses are specially designed to give higher quality education in best form but if in case you don't like our course you can easily take refund within 7 days of purchase"
            }
            style="bg-cardLight"
          />
          <ServicesCard
            icon={<MdSchool className="md:text-9xl text-6xl md:mb-0 mb-4" />}
            title={"Certificate"}
            body={
              "Motivation is very important to be consistent and we also believe in that that's why we also offer a completion certificte after you finished the course"
            }
            style="bg-cardLight"
          />
          <ServicesCard
            icon={<MdHd className="md:text-9xl text-6xl md:mb-0 mb-4" />}
            title={"HD Videos"}
            body={
              "We don't compromise with quality that's why we offer you HD videos so you don't have a hard time to see all the code written in tutorial videos"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
