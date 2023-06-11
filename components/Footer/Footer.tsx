import React from "react"
const Footer = () => (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">ContentArtisans</h3>
          <p className="mt-2">Creating tailored content for businesses of all sizes.</p>
        </div>
        <div>
          <a href="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</a>
          <span className="mx-2">|</span>
          <a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 border-t border-gray-700 pt-4">
        <p className="text-center">&copy; {new Date().getFullYear()} ContentArtisans. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;
  