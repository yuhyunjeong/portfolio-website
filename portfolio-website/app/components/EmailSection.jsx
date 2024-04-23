import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-white text-xl font-bold my-2">Let's Connect!</h5>
        <p></p>
        <div className="socials flex flex-row gap-2">
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
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="yuhyunjungdev@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              required
              className="bg-[#eeecefd9] border border-[#e8cbee97] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ..."
            />
          </div>
          <button
            type="submit"
            className="bg-gray-400 border border-[#decde1] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
