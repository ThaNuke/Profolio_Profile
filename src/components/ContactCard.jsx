import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ส่งอีเมลผ่าน EmailJS
    emailjs
      .sendForm(
        'service_l9ru7d9', // รหัส Service ที่คุณสร้างใน EmailJS
        'template_rvmgxjh', // รหัส Template ที่คุณตั้งค่าใน EmailJS
        e.target, // ส่งข้อมูลจากฟอร์ม
        'r2tGEpqq8sf1auCfT' // รหัส User ของคุณใน EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setStatus('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <form
      className="w-full max-w-4xl container mx-auto p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-12"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Send Me a Message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
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
          name="phone"
          type="text"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-700 transition-all duration-300"
        >
          Send Message
        </button>
      </div>
      {status && (
        <div className="mt-4 text-center text-gray-300">
          <p>{status}</p>
        </div>
      )}
    </form>
  );
};

const ContactMe = () => {
  const contactMethods = [
    { platform: 'Email', icon: AiOutlineMail, link: 'mailto:zerohero307@gmail.com' },
    { platform: 'GitHub', icon: FaGithub, link: 'https://github.com/ThaNuke' },
    { platform: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/tha__nuke/profilecard/?igsh=MTYxMGVuYXJudzI3MQ==' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com/tharathon.pragodkla/' },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">Contact Me</h1>
      <p className="text-center text-gray-500 mb-10">
        "Together, let’s craft something truly legendary!"
      </p>

      {/* Contact Methods */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {contactMethods.map(({ platform, icon, link }) => (
          <ContactCard
            key={platform}
            platform={platform}
            icon={icon}
            link={link}
            className="flex-[0_0_calc(50%-1rem)] sm:flex-[0_0_calc(33.33%-1rem)] lg:flex-[0_0_calc(25%-1rem)]"
          />
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactMe;
