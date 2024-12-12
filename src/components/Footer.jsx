import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-4 text-center">
      <p>Copyright ©  Tharathon.prago 2024</p>
      <p>
        Follow us on{" "}
        <a
          href="https://www.instagram.com/tha__nuke/profilecard/?igsh=MTYxMGVuYXJudzI3MQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          href="https://www.facebook.com/tharathon.pragodkla/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Facebook
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
