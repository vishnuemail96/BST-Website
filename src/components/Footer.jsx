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
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:balasrithandayuthapanichit@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform duration-300 ease-in-out"
              aria-label="Gmail"
            >
              <img src="gmail.png" alt="Gmail" className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/bala-sri-thandayuthapani-b585b7280/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <img src="linkedin.png" alt="LinkedIn" className="w-7 h-7" />
            </a>

            <a
              href="https://www.instagram.com/balasrithandayuthapani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform duration-300 ease-in-out"
              aria-label="Instagram"
            >
              <img src="instagram.png" alt="Instagram" className="w-7 h-7" />
            </a>

            <a
              href="https://www.facebook.com/people/Bala-Sri-Thandayuthapani/pfbid02ZZZTwGcBAk2KnomzPdC7Eo6Wh1fuuHG8puLSB4XhxJ9nrVqhQsLSS2Ze72LHTUqZl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform duration-300 ease-in-out"
              aria-label="Facebook"
            >
              <img src="facebook.png" alt="Facebook" className="w-7 h-7" />
            </a>

            <a
              href="https://www.youtube.com/@balasrithandayuthapani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform duration-300 ease-in-out"
              aria-label="YouTube"
            >
              <img src="youtube.png" alt="YouTube" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-white mt-8 text-center">
        <p>&copy; 2024 All Rights Reserved. Bala Sri Thandayuthapani Chits</p>
      </div>
    </footer>
  );
};

export default Footer;
