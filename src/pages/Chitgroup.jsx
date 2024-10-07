import { motion } from "framer-motion";

const Chitgroup = () => {
  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="services-container"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-violet-800 mb-10 mt-12 text-center">
        On Going Chits
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
       {/* Another responsive iframe2 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=597403153&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 1"
          variants={sectionVariants}
        ></motion.iframe>

        {/* Another responsive iframe2 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=1890964818&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe3 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=813005682&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe4 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=1014122693&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe5 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=442715808&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe6 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=709432257&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe7 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=100284919&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe8 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=1694678974&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
         {/* Another responsive iframe9 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=737538299&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
        {/* Another responsive iframe10 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=677815836&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
        {/* Another responsive iframe11 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=560372910&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>
        {/* Another responsive iframe12 */}
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZGHo_4FR7aQPLmlnHpTiCrBsg7HQm27aGOI6XQnWNKCR5AND3QNkX60hlEPJKXkXLF777OhljlqX/pubhtml?gid=1485274110&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-80 md:h-[50vh] lg:h-[75vh] rounded-md border border-gray-900"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>

      </motion.div>
    </motion.div>
  );
};

export default Chitgroup;
