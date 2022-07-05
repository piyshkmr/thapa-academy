import Head from "next/head";
import Courses from "../sections/Courses";
import Header from "../sections/Header";
import Services from "../sections/Services";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Home() {
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsShowScrollToTop(true);
      } else if (scrolled <= 300) {
        setIsShowScrollToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>Thapa Academy</title>
        <meta
          name="description"
          content="An online educational platform which helps you to master you skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark  lg:px-12 md:px-6 px-4 text-gray-50 min-h-screen">
        <Header />
        <Courses />
        <Services />
        <FAQ />
        <Testimonials />
        <Contact />
        <Footer />
        {isShowScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed shadow-lg hover:scale-95 transition-transform md:right-10 md:bottom-10 right-5 bottom-5 md:p-6 p-4 rounded-full bg-primary text-white"
          >
            <MdOutlineArrowUpward className="text-xl" />
          </button>
        )}
      </main>
    </div>
  );
}
