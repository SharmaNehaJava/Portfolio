import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [feedback, setFeedback] = useState(""); // To show feedback messages
  const [showPopup, setShowPopup] = useState(false); // To toggle the popup

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_crs4oib", // Your EmailJS service ID
        "template_6lveu2e", // Your EmailJS template ID
        form.current,       // Ref to the form
        "8UaUbudREVfpiUO3Y" // Your EmailJS public key
      )
      .then(
        (result) => {
          setFeedback(""); // Remove feedback message after successful send
          setShowPopup(true); // Show the popup on success
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          setFeedback("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full">
            <div className="px-4 py-2 rounded-full text-4xl font-bold whitespace-nowrap animate-slideText text-blue-500">
              Contact!! Contact!! Contact!!
            </div>
          </div>

          <p className="dark:text-dark-6 text-sm text-center mx-8">
            If you're interested in collaborating on a project, exploring freelance opportunities, or discussing potential job openings, I'm here to connect...
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg p-4 shadow-lg dark:bg-dark-2 sm:p-12">
              <form ref={form} onSubmit={sendEmail}>
                {/* Name field */}
                <ContactInputBox type="text" name="from_name" placeholder="Your Name" />
                
                {/* Hardcoded recipient's name */}
                <input type="hidden" name="to_name" value="Neha" />
                
                {/* Email field */}
                <ContactInputBox type="email" name="reply_to" placeholder="Your Email" />
                
                {/* Message text area */}
                <ContactTextArea row="6" placeholder="Your Message" name="message" />

                <div>
                  <button type="submit" className="w-full rounded border border-primary p-3 transition hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {/* This can be used for any other content you want to show */}
            <canvas className="w-full h-full"></canvas>
          </div>
        </div>

        {/* Pop-up Modal for confirmation */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold">Email Sent!</h3>
              <p>Your message has been sent successfully.</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={closePopup}
              >
                Okay
              </button>
            </div>
          </div>
        )}

        {/* This will be removed to avoid constant feedback message */}
        {/* {feedback && <p className="mt-4 text-sm text-green-500">{feedback}</p>} */}
      </div>
    </>
  );
};

const ContactTextArea = ({ row, placeholder, name }) => (
  <div className="mb-2">
    <textarea
      rows={row}
      placeholder={placeholder}
      name={name}
      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-gray-800"
    />
  </div>
);

const ContactInputBox = ({ type, placeholder, name }) => (
  <div className="mb-2">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 bg-gray-800"
    />
  </div>
);

export default Contact;
