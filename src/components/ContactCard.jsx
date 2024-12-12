import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactCard = ({ platform, icon: Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center px-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 w-40 h-40 text-center"
    >
      <div className="text-4xl text-blue-400 mb-4">
        <Icon />
      </div>
      <p className="text-sm font-semibold text-gray-300">{platform}</p>
    </a>
  );
};

const ContactForm = () => {
  return (
    <form className="w-full max-w-4xl container mx-auto p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Send Me a Message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="phone"
          type="text"
          placeholder="Your phone number"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="message"
          rows="4"
          placeholder="Your message"
        ></textarea>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-700 transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const ContactMe = () => {
  const contactMethods = [
    { platform: 'Email', icon: AiOutlineMail, link: 'mailto:example@gmail.com' },
    { platform: 'GitHub', icon: FaGithub, link: 'https://github.com/ThaNuke' },
    { platform: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/tha__nuke/profilecard/?igsh=MTYxMGVuYXJudzI3MQ==' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com/tharathon.pragodkla/' },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">Contact Me</h1>
      <p className="text-center text-gray-500 mb-10">
        Let&apos;s connect and create something amazing together!
      </p>

      {/* Contact Methods */}
      <div className="flex flex-cols-2  justify-center -items-center mb-12 gap-4 px-12">
        {contactMethods.map(({ platform, icon, link }) => (
          <ContactCard key={platform} platform={platform} icon={icon} link={link} />
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactMe;
