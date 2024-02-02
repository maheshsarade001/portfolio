import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/015e77c5-6314-4f0f-a0c4-14f3f9d16e0b"
        className="flex flex-col max-w-xl w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-center">
            / / Submit the below form
            <span className="block text-center">or</span> shoot me an email -
            <a
              className="text-pink-400 font-bold"
              href="mailto:maheshsarade001@gmail.com"
            >
              maheshsarade001@gmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          placeholder="Name"
          type="text"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="mb-4 p-2 bg-[#ccd6f6] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
          type="number"
          placeholder="Contact Number"
          name="number"
          maxLength={10}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id=""
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
