import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const canvasRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_crs4oib', 'template_3j6zv4I', form.current, {
        publicKey: '8UaUbudREVfpiUO3Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center text-center ">
          <div className=" w-full">
          <div className=" px-4 py-2 rounded-full text-4xl font-bold whitespace-nowrap animate-slideText text-blue-500">Contact!! Contact!! Contact!! Contact!! Contact!! Contact!! </div>
          </div>
          
          <p className="dark:text-dark-6 text-sm text-center mx-8">
          If you're interested in collaborating on a project, exploring freelance opportunities, discussing potential job openings, or simply having a professional conversation, I'm here to connect. As a BTech CSE student with experience in full-stack web development and Java, particularly within the MERN stack, I am eager to explore new challenges and opportunities. I truly appreciate your time and look forward to engaging with you. Let's talk and see how we can work together!
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 ">
            <div className="relative rounded-lg p-4 shadow-lg dark:bg-dark-2 sm:p-12">
              <form ref={form} onSubmit={sendEmail}>
                <ContactInputBox type="text" name="user_name" placeholder="Your Name" />
                <ContactInputBox type="email" name="user_email" placeholder="Your Email" />
                <ContactInputBox type="text" name="user_phone" placeholder="Your Phone" />
                <ContactTextArea row="6" placeholder="Your Message" name="message" defaultValue="" />
                <div>
                  <button type="submit" className="w-full rounded border border-primary p-3 transition hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-2">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-gray-800"
        defaultValue={defaultValue}
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-2">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-gray-800"
      />
    </div>
  );
};

export default Contact;
