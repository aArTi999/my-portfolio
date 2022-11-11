import React from "react";
import Button from "./Button";
import Heading from "./Heading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#F6F6FF] bg-gradient-to-t from-blue-100 p-4"
    >
      <div className="flex flex-col justify-center items-center">
        <Heading title={"Contact"} />

        <p className="text-xl w-2/3 text-center mt-5">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>

        <form
          action=""
          className="flex flex-col w-full md:w-4/5 bg-white shadow-lg p-4 md:p-8 my-12 rounded-md "
        >
          <div className="flex flex-col my-3">
            <label htmlFor="name" className="font-bold text-slate-600">
              Name
            </label>
            <input
              type="text"
              className="bg-slate-200 py-4 px-3 rounded-md my-5 font-semibold"
              name="name"
              placeholder="Enter Your Name "
            />
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="email" className="font-bold text-slate-600">
              Email
            </label>
            <input
              type="email"
              className="bg-slate-200 py-4 px-3 rounded-md my-5 font-semibold"
              name="email"
              placeholder="Enter Your Email "
            />
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="message" className="font-bold text-slate-600">
              Message
            </label>
            <textarea
              name="message"
              className="bg-slate-200 resize-none py-4 px-3 rounded-md my-5 font-semibold"
              placeholder="Enter Your Message "
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button title={"Submit"} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
