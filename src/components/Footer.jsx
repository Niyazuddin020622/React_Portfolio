import React from 'react';

const Footer = () => {
  const projectStartYear = 2024; // Project shuru hone ka saal
  const currentYear = new Date().getFullYear();
  const displayYear = currentYear > projectStartYear ? `${projectStartYear} - ${currentYear}` : `${projectStartYear}`;

  return (
    <footer className="bg-gray-100 py-4 relative">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {displayYear} Niyazuddin Ansari. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
