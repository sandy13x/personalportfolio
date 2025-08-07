"use client";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "df37eda8-365f-405b-ba7f-0a10b2d663d5");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-zinc-200 bg-gradient-to-br "
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-400 mb-6">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-zinc-500">
          Feel free to reach out for collaborations, freelance work, or just to say hi!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center mt-6 gap-6 text-2xl">
          <a
            href="mailto:chaudharypiyush596@gmail.com"
            aria-label="Email"
            className="text-teal-400 hover:text-teal-300"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-chaudhary-b9826229a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-400 hover:text-blue-300"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/piyush1740x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-300 hover:text-white"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.instagram.com/piyush_up_gkp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-400 hover:text-pink-300"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-300 hover:text-blue-200"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-500"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-500 hover:text-red-400"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-sky-400 hover:text-sky-300"
          >
            <i className="fab fa-telegram" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-center text-zinc-700 mb-6">
          Send a Message....
        </h3>
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg py-3 px-4 bg-white/5 text-zinc-700 placeholder-zinc-700 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg py-3 px-4 bg-white/5 text-zinc-700 placeholder-zinc-700 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            required
            className="w-full rounded-lg py-3 px-4 bg-white/5 text-zinc-700 placeholder-zinc-700 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-400 text-black font-medium py-3 rounded-lg hover:bg-pink-300 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-pink-400 mt-4">{result}</p>
      </div>
    </section>
  );
};

export default Contact;
