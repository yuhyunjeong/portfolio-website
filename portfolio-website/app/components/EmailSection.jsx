import React from "react";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-white text-xl font-bold my-2">Let's Connect!</h5>
        <p></p>
        <div className="socials flex flex-row gap-2"></div>
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
