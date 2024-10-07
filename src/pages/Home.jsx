import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Image URLs for slideshow
const imageUrls = [
  "Slidshowimg1.png",
  "Slidshowimg2.png",
  "Slidshowimg3.png",
];

// Data for Services and Features
const features = [
  {
    title: "Pre-planned Payments",
    description:
      "Plan your payments ahead of time with flexible schedules to meet your financial goals.",
    image: "Secure.png", // Path to the money symbol PNG
  },
  {
    title: "Safe and Secure Transactions",
    description:
      "We ensure high-end encryption and security protocols to safeguard all your transactions.",
    image: "Secure1.png", // Path to the lock symbol PNG
  },
  {
    title: "Open Vacant List",
    description:
      "View all available vacancies and opportunities, updated regularly for your convenience.",
    image: "Secure3.png", // Path to the vacant symbol PNG
  },
  {
    title: "Full Payment Services",
    description:
      "Complete your payments in a single step with our easy and streamlined payment process.",
    image: "Secure4.png", // Path to the payment symbol PNG
  },
];

// Data for Solutions
const solutions = [
  {
    title: "Optimized Business Solutions",
    description:
      "Streamline your business operations and achieve growth with our innovative solutions.",
    image: "Bussiness solution.svg", // Replace with your actual image URL
  },
  {
    title: "Liability Reduction Strategies",
    description:
      "Minimize risks and safeguard your assets with our comprehensive liability management solutions.",
    image: "undraw_business_deal_re_up4u.svg", // Replace with your actual image URL
  },
  {
    title: "Enhanced Family Protection",
    description:
      "Ensure your family’s future with tailored financial and safety solutions.",
    image: "undraw_family_vg76.svg", // Replace with your actual image URL
  },
  {
    title: "Investment and Wealth Growth",
    description:
      "Grow your investments and build wealth with our expert financial planning services.",
    image: "Wealth and investment.svg", // Replace with your actual image URL
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === imageUrls.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Slideshow Section */}
      <section className="relative w-full h-64 md:h-screen overflow-hidden flex justify-center items-center  ">
    <AnimatePresence mode="wait">
      <motion.img
        key={currentImage}
        src={imageUrls[currentImage]}
        alt="Slideshow Image"
        className="absolute w-full h-full object-contain rounded-lg shadow-inner"
        initial={{ opacity: 0, x: 100 }}  // Start offscreen right
        animate={{ opacity: 1, x: 0 }}   // Enter to the center
        exit={{ opacity: 0, x: -100 }}   // Exit offscreen left
        transition={{ duration: 0.8 }}   // Control transition speed
      />
    </AnimatePresence>
  
</section>



      {/* Services and Features Section */}
      <section className="bg-gray-200 py-12 px-4 md:px-20 w-full ">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-20">
          Our Services and Features
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  gap-12" // Increase the grid size
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-violet-600 transition-colors duration-300 transform hover:translate-y-[-10px] hover:scale-105 relative"
              variants={cardVariants}
            >
              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-violet-700 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Accent - PNG Symbol */}
              {feature.image && (
                <div className="absolute top-[6px] right-[6px]">
                  <img src={feature.image} alt={`${feature.title} Icon`} className="h-12 w-12" /> {/* Increase size */}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-20 w-full ">
        <motion.h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Our Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transition-colors duration-300 transform hover:translate-y-[-10px] hover:scale-105"
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-violet-700 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="bg-gray-200 py-10 px-4 md:px-16">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Client 1 Feedback */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8 p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="flex-shrink-0 w-56 h-56 md:w-48 md:h-48 bg-gray-300 rounded-full overflow-hidden shadow-lg transform transition-transform hover:scale-110 duration-300">
              <img
                src="Clinet1.png"
                alt="Client Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <p className="text-xl font-semibold text-violet-700">Mani Kumaran</p>
              <p className="text-sm font-semibold text-violet-700"> Founder of Photo Studio Business</p>
              <p> ⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 mt-2">
              BST Chit Funds has helped me save and grow my money effortlessly. Highly recommend their services!
              </p>
            </div>
          </div>

          {/* Client 2 Feedback */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8 p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="flex-shrink-0 w-56 h-56 md:w-48 md:h-48 bg-gray-300 rounded-full overflow-hidden shadow-lg transform transition-transform hover:scale-110 duration-300">
              <img
                src="client3.png"
                alt="Client Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <p className="text-xl font-semibold text-violet-700">Sathya</p>
              <p className="text-sm font-semibold text-violet-700"> Founder of Tailor and Lia Flex Business</p>
              <p> ⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 mt-2">
              Trustworthy and reliable! I have been with BST Chit Funds for years, and my financial future feels secure.
              </p>
            </div>
          </div>

          {/* Client 3 Feedback */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8 p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="flex-shrink-0 w-56 h-56 md:w-48 md:h-48 bg-gray-300 rounded-full overflow-hidden shadow-lg transform transition-transform hover:scale-110 duration-300">
              <img
                src="client2.png"
                alt="Client Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <p className="text-xl font-semibold text-violet-700">Sivamani</p>
              <p className="text-sm font-semibold text-violet-700"> Founder of Gold Business</p>
              <p> ⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 mt-2">
              Great returns and excellent customer service! BST Chit Funds truly cares about our family financial well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
