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
      <h2 className="text-4xl md:text-5xl font-bold text-violet-800 mb-10 mt-10 text-center">
        On Going Chits
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQDaOlDsnFiF7PnpXvfdP76clBmCmlnkeHoq-BSCDFaai2w28Qz2f2OTFvmYZP5XLVbNkOkUP3P3IcY/pubhtml?gid=1386834576&amp;single=true&amp;widget=true&amp;headers=false"
          height="500"
          style={{ border: "none" }}
          title="Chit Fund Details 1"
          variants={sectionVariants}
        ></motion.iframe>

        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRbDzPa4sQkvVbqn8nGlaDpTGFyAnMqnChXFWw7UB1YG0MxF6CeUUV3snIOgWgFXPblTwahBGbZZEqz/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          height="500"
          style={{ border: "none" }}
          title="Chit Fund Details 2"
          variants={sectionVariants}
        ></motion.iframe>

        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQXfxUKJ5wZhf-rMgRLvIbD6WfQxA1pzXQ8v5pXl8T3lmJHUaO0YkwTmwO2i6QG3eMDJTWeogXqWms/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          height="500"
          style={{ border: "none" }}
          title="Chit Fund Details 3"
          variants={sectionVariants}
        ></motion.iframe>

        <motion.iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSy-KQ8l8-L5bTK4HJrlTxdkt-tmENdu1SlBVGg3sFHdShZYOrZqbpBojsBxYkJznk5RkKEFsOeMdPf/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          height="500"
          style={{ border: "none" }}
          title="Chit Fund Details 4"
          variants={sectionVariants}
        ></motion.iframe>
      </motion.div>
    </motion.div>
  );
};

export default Chitgroup;
