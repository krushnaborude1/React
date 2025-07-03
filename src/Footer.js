import React from "react";

const Footer = () => (
  <footer className="bg-black text-center py-3 border-top border-secondary mt-auto">
    <p className="text-secondary m-0">
      © {new Date().getFullYear()} Keeper-App
    </p>
  </footer>
);

export default Footer;
