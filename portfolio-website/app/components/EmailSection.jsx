"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid my-12 md:my-20 py-12 md:py-20 gap-4">
      <div className="flex flex-col">
        <h5 className="flex justify-center items-center text-center text-teal-100 text-4xl font-bold my-8">
          Let&apos;s Connect!
        </h5>
        <div className="socials flex justify-center gap-4 mb-4">
          <Link href="https://github.com/yuhyunjeong/">
            <div className="relative w-14 h-14">
              <Image src="/github-icon.png" alt="Github Icon" layout="fill" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/yuhyun-jade-jung-1b14a2290/">
            <div className="relative w-14 h-14">
              <Image
                src="/linkedin-icon.png"
                alt="Linkedin Icon"
                layout="fill"
              />
            </div>
          </Link>
          <Link href="https://x.com/yuhyun_dev">
            <div className="relative w-14 h-14">
              <Image
                className="p-2"
                src="/twitter-icon.png"
                alt="Twitter Icon"
                layout="fill"
              />
            </div>
          </Link>
        </div>
        <p className="flex justify-center text-black text-lg font-medium">
          contact@jadejung.com
        </p>
        {/*}
        <form
          className="flex flex-col gap-6 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 w-1/2">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="... @gmail.com"
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="submit"
              type="text"
              id="subject"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say hi!"
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message "
              type="text"
              id="message"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ..."
            />
          </div>
          <button
            type="submit"
            className="bg-gray-400 border border-[#decde1] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-1/2"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-yellow-200 mt-2">Email sent successfully!</p>
          )}
        </form>*/}
      </div>
    </section>
  );
};

export default EmailSection;
