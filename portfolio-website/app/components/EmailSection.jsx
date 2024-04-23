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
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="yuhyunjungdev@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
