const Footer = () => {
  return (
    <footer className="footer bg-violet-900 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Office Address Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Office Address</h3>
          <p>Bala Sri Thandayuthapani Chit Funds (P) Ltd Co.</p>
          <p>Mahatma Gandhi Nagar,</p>
          <p>TNSTC Back Side, Thuvarankuruchi.</p>
          <p>District: TIRUCHIRAPPALLI,</p>
          <p>State: TAMIL NADU,</p>
          <p>Pin Code: 621314</p>
          <p>Phone: +91 97510 60940</p>
          <p>Email: balasrithandayuthapanichit@gmail.com</p>
        </div>

        {/* Google Map Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Find Us</h3>
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1962.3692604562311!2d78.38565253852731!3d10.362779997440498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIxJzQ2LjAiTiA3OMKwMjMnMTMuMCJF!5e0!3m2!1sen!2sin!4v1727001194905!5m2!1sen!2sin"
            title="Google Maps location of Bala Sri Thandayuthapani Chit Funds Thuvarankuruchi"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Latest News Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Latest News</h3>
          <div className="overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap space-x-4">
              <span className="inline-block">
                Upcoming Chits: ₹20,00,000, ₹50,00,000 & ₹1,00,00,000
              </span>
            </div>
            <div className="animate-marquee whitespace-nowrap space-x-4">
              <span className="inline-block">
                Daily meetings for employees.
              </span>
            </div>
            <div className="animate-marquee whitespace-nowrap space-x-4">
              <span className="inline-block">
                Weekly meetings for customers.
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/ABOUT" className="hover:text-violet-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/CHITS" className="hover:text-violet-400 transition-colors">
                Chits
              </a>
            </li>
            <li>
              <a href="/CHIT GROUP" className="hover:text-violet-400 transition-colors">
                Chit Group
              </a>
            </li>
            <li>
              <a href="/CONTACT US" className="hover:text-violet-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-white mt-8 text-center ">
        <p>
          &copy; 2024  All Rights Reserved. Bala Sri Thandayuthapani Chits
        </p>
      </div>
    </footer>
  );
};

export default Footer;
