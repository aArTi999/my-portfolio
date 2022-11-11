import React from "react";
import myImg from "../assets/MyImage.JPG";
import About from "./About";
import Header from "./Header";
import Button from "./Button";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <section id="home" className="w-full h-screen">
      <Header />
      <div className=" bg-[#F6F6FF] bg-gradient-to-t from-blue-100 w-full h-screen flex flex-col relative justify-center items-center z-10">
        <h1 className="md:text-6xl lg:text-6xl text-4xl font-extrabold text-slate-800 text-center ">
          HI, THIS IS AARTI SHARMA
        </h1>
        <p className="px-5 md:w-1/2 lg:w-1/2 text-center mt-10 leading-8 text-lg">
          A goal oriented, determined and ambitious person with a passion for
          Technology. I enjoy working collaboratively but can also work
          independently.
        </p>
        <a href="#projects">
          <Button title={"Projects"} />
        </a>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};
export default Home;
