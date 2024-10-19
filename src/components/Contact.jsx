import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GmailLogo3D from "./GmailLogo3D"; // 3D logo component

const Contact = () => {
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error popup
  const [sending, setSending] = useState(false); // State to handle "Sending..." message

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true); // Show "Sending..." while the email is being sent

    emailjs
      .sendForm(
        "service_crs4oib",
        "template_6lveu2e",
        form.current,
        "8UaUbudREVfpiUO3Y"
      )
      .then(
        () => {
          setShowSuccessPopup(true); // Show success popup
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.error("FAILED...", error.text);
          setShowErrorPopup(true); // Show error popup
        }
      )
      .finally(() => {
        setSending(false); // Hide "Sending..." message
      });
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <div id="contact-section" className="flex flex-col min-h-screen">
      {/* Animated Contact Heading */}
      <div className="items-center justify-center text-center pt-12">
        <h1 className="text-4xl font-bold text-blue-500 animate-slideText">
          Contact... Contact... Contact
        </h1>
        <p className="text-sm mx-6 mt-2 text-white underline">
          If you're interested in collaborating on a project, exploring freelance
          opportunities, or discussing potential job openings, I'm here to connect...
        </p>
      </div>

      {/* Main Content: Geometry & Contact Form Centered */}
      <div className="flex flex-grow h-full flex-col md:flex-row"> {/* Layout adjustments */}
        {/* Geometry Side */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-black flex items-center justify-center p-4">
          <GmailLogo3D className="h-40 md:h-auto" /> {/* Adjusted height */}
        </div>

        {/* Form Side (Vertically and Horizontally Centered) */}
        <div className="w-full md:w-1/2 lg:w-3/5 flex items-center justify-center bg-black text-white h-1/2 md:h-full my-auto">
          <div className="rounded-lg shadow-lg p-4 w-full bg-gray-800 max-w-md">
            <form ref={form} onSubmit={sendEmail}>
              <ContactInputBox 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                required // Add required attribute
              />
              <input type="hidden" name="to_name" value="Neha" />
              <ContactInputBox 
                type="email" 
                name="reply_to" 
                placeholder="Your Email" 
                required // Add required attribute
              />
              <ContactTextArea 
                row="6" 
                placeholder="Your Message" 
                name="message" 
                required // Add required attribute
              />

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded border border-primary p-3 bg-blue-500 text-white transition hover:bg-opacity-90"
                disabled={sending} // Disable button while sending
              >
                {sending ? "Sending..." : "Send Message"} {/* Display "Sending..." */}
              </button>
            </form>
          </div>

          {/* Pop-up Modal for success confirmation */}
          {showSuccessPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-green-500 text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold">Email Sent!</h3>
                <p>Your message has been sent successfully.</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={closeSuccessPopup}
                >
                  Okay
                </button>
              </div>
            </div>
          )}

          {/* Pop-up Modal for error notification */}
          {showErrorPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-red-500 text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold">Error!</h3>
                <p>Failed to send your message. Please try again later.</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={closeErrorPopup}
                >
                  Okay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Contact Input Box Component
const ContactInputBox = ({ type, placeholder, name, required }) => (
  <div className="mb-4">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required} // Pass down required attribute
      className="w-full rounded border border-stroke px-4 py-3 bg-gray-800 text-base text-body-color outline-none focus:border-primary"
    />
  </div>
);

// Contact Text Area Component
const ContactTextArea = ({ row, placeholder, name, required }) => (
  <div className="mb-4">
    <textarea
      rows={row}
      placeholder={placeholder}
      name={name}
      required={required} // Pass down required attribute
      className="w-full resize-none rounded border border-stroke px-4 py-3 bg-gray-800 text-base text-body-color outline-none focus:border-primary"
    />
  </div>
);

export default Contact;
