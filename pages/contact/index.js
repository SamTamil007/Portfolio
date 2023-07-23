import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { fadeIn } from "../../variants";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS service, template, and user IDs.
    emailjs
      .sendForm(
        "service_k4i84uo",
        "template_9u8ln6s",
        e.target,
        "6taWRoTyxU3wLrQL9"
      )
      .then(
        (result) => {
          alert("Email sent successfully", result.text);
          // console.log("Email sent successfully", result.text);
        },
        (error) => {
          alert("Failed to send email", error.text);
          // console.log("Failed to send email", error.text);
        }
      );

    // Reset the form fields after submission
    e.target.reset();
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleFormSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="textarea"
            ></textarea>
            <button className="btn border rounded-full border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
