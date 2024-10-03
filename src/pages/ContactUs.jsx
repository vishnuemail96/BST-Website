import { motion } from "framer-motion";

const ContactUs = () => {
  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-20 px-8 flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Contact Section */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-12 w-full max-w-screen-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-violet-800 mb-8 text-center"
          variants={sectionVariants}
        >
          Contact Us
        </motion.h2>

        {/* Contact Details */}
        <motion.div className="mb-12" variants={sectionVariants}>
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Contact Details
          </h3>
          <p className="text-gray-700 text-lg">
            Email: balasrithandayu@gmail.com
          </p>
          <p className="text-gray-700 text-lg">Phone: +91 9751060740</p>
          <p className="text-gray-700 text-lg">
            Address:
            <p>Mahatma Gandhi Nagar,</p>
            <p>TNSTC Back Side,</p>
            <p>District: TIRUCHIRAPPALLI,</p>
            <p>State: TAMIL NADU,</p>
            <p>Pin Code: 621314</p>
            <p>Phone: +91 9751060740</p>
            <p>Email: info@example.com</p>
          </p>
        </motion.div>

        {/* Google Form for Contact */}
        <motion.div className="mb-12" variants={sectionVariants}>
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Contact Us Form
          </h3>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyr35BpG4YMisSqvhzAakRH8YlSDH_Wo3k9r7swMET4h1cZA/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </motion.div>

        {/* Google Form for Career Applications */}
        <motion.div className="mb-12" variants={sectionVariants}>
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Career Application Form
          </h3>
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_CAREER_FORM_ID/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-md border border-gray-300"
          >
            Loading…
          </iframe>
        </motion.div>

        {/* Employee Benefits */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Employee Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Health Insurance and Wellness Benefits</li>
            <li>Flexible Work Hours and Remote Opportunities</li>
            <li>Professional Development and Training</li>
            <li>Generous Paid Time Off and Holidays</li>
            <li>Employee Discounts on Company Products/Services</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
