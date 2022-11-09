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
    <section className="w-full h-screen">
      <Header />
      <div className=" bg-[#F6F6FF] bg-gradient-to-t from-blue-100 w-full h-screen flex flex-col relative justify-center items-center z-10">
        <h1 className="text-6xl font-extrabold text-slate-800">
          HI, THIS IS AARTI SHARMA
        </h1>
        <p className="w-1/2 text-center mt-10 leading-8 text-lg">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Button title={"Projects"} />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};
export default Home;
