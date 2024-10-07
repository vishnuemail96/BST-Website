import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isVisible] = useState(true); // Set to true to display content

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* About the Company Section */}
          <motion.section
            className="mb-12"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sectionVariants}
          >
            <div className="bg-gray-100 py-12 px-4 md:px-16">
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                  About BALA SRI THANDAYUTHAPANI
                </h2>
                <p className="text-gray-700 text-lg">
                  Founded in 2017 and officially registered in 2020, BALA SRI
                  THANDAYUTHAPANI was established with the core mission of ensuring that
                  customers receive the full financial benefits they deserve. Our vision
                  stems from our own experiences with chit fund schemes, where we identified significant gaps in fairness. In one instance, we saw customers paying ₹5 lakhs upfront but only receiving ₹2 lakhs in return, a disparity that persisted over a 20-month period. This led us to question why customers should pay more than they receive. Our commitment to providing equitable financial solutions drove us to create a company where every customer receives the amount they are entitled to.
                  <br /><br />
                  <strong>Customer-Centric Approach</strong>
                  <br />
                  At BALA SRI THANDAYUTHAPANI, we are fully dedicated to putting our customers first. We have built a reputation for being reliable and adopting a transparent approach to every financial service we offer. With a team of highly experienced and skilled professionals, we provide personalized financial solutions to meet the diverse needs of individuals and businesses.
                  <br /><br />
                  <strong>Expertise and Services</strong>
                  <br />
                  We integrate in-depth professional expertise and an understanding of market dynamics to provide top-tier financial services. Our offerings include:
                  <ul className="list-disc list-inside ml-4">
                    <li>Investment management</li>
                    <li>Wealth planning</li>
                    <li>Retirement planning</li>
                    <li>Tax advisory</li>
                    <li>Risk assessment</li>
                    <li>Industry advancement and more</li>
                  </ul>
                  <br />
                  Our innovative strategies, combined with advanced technologies, ensure that we provide comprehensive financial support to our clients.
                  <br /><br />
                  <strong>Our Commitment</strong>
                  <br />
                  At BALA SRI THANDAYUTHAPANI, we take immense pride in playing a pivotal role in helping our customers achieve their financial goals. We are committed to the growth and success of every customer who invests with us, and our aim is to continue being a trusted partner in their financial journey.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Director and Founder Profile Section */}
          <motion.section
            className="mb-12"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sectionVariants}
          >
            <div className="max-w-5xl mx-auto mb-6 p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                Director and Founder Profiles
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                {/* First Profile */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
                    <img
                      src="Founder.webp"
                      alt="Profile Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h1 className="text-2xl font-bold text-violet-700">Velladurai.C</h1>
                    <p>Founder and Director</p>
                  </div>
                </div>

                {/* Second Profile */}
                <div className="flex items-center mt-8 md:mt-0">
                  <div className="flex-shrink-0 w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
                    <img
                      src="Directing.png"
                      alt="Founder Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h1 className="text-2xl font-bold text-violet-700">Raja Lakshmi.V</h1>
                    <p>Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* BST Group Section */}
          <motion.section
            className="bg-gray-100 mb-12"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sectionVariants}
          >
            <div className="max-w-5xl mx-auto p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-8 py-8">
                BST Group
              </h2>
              <div className="flex flex-wrap gap-8">
                <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-violet-700 mb-4">BST CHITS</h3>
                  <p className="text-gray-600">
                    BST Chits offers chit fund schemes aimed at supporting the financial
                    needs of individuals and families, including education expenses. Customers can join different chit groups based on durations of 10, 15, or 20 months. Vacancies are filled each month to accommodate additional participants, and the chit process is conducted on a daily, weekly, or monthly basis to ensure smooth and timely service. Payments are verified by designated employees before being released, and established customers often benefit from faster processing times.
                  </p>
                </div>
                <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-violet-700 mb-4">BST FINANCE</h3>
                  <p className="text-gray-600">
                    BST Finance offers flexible payment options to meet the diverse needs
                    of its customers. They provide both monthly and weekly collection services, allowing customers to choose a payment schedule that suits their financial situation. This business is designed to help individuals manage their finances effectively through regular and manageable payment plans.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default About;
