// src/components/Chits.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chits = () => {
  const [isVisible] = useState(true); // Set to true to display content

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* What is Chit Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                What is Chit?
              </h2>
              <p className="text-gray-700 text-lg">
                A chit fund is a financial system where a group of individuals
                contributes a fixed amount regularly. The collected sum is
                distributed to one member of the group at periodic intervals,
                usually through a bidding or lottery system. This method serves
                as both a savings and borrowing tool, helping people manage
                their finances more effectively.
              </p>
            </motion.section>

            {/* How it Works Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                How it Works
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                    Step 1: Joining the Chit
                  </h3>
                  <p className="text-gray-600">
                    Customers select and join a chit group based on the duration
                    (e.g., 10, 15, or 20 months).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                    Step 2: Registration for Payment
                  </h3>
                  <p className="text-gray-600">
                    Members register for the specific month when they wish to
                    receive their chit amount.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                    Step 3: Scheduled Payout
                  </h3>
                  <p className="text-gray-600">
                    On their registered month, the member collects their chit
                    amount.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                    Step 4: Monthly Contributions{" "}
                  </h3>
                  <p className="text-gray-600">
                    During other months, employees collect the contributions
                    from members as per the chit agreement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-4">
                    Step 5: Verification and Collection{" "}
                  </h3>
                  <p className="text-gray-600">
                    Employees verify the payments before releasing the amount to
                    members when their turn arrives.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Security Norms Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                Security Norms
              </h2>
              <p className="text-gray-700 text-lg">
                Chit funds are regulated under the Chit Funds Act, 1982, which
                ensures transparency and security. Some key security norms
                include:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                <li>Proper documentation and registration of the chit fund.</li>
                <li>Regular audits and financial disclosures.</li>
                <li>Compliance with regulatory guidelines and standards.</li>
              </ul>
            </motion.section>

            {/* Benefits of Chits Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                Benefits of Chits
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 text-lg">
                <li>Encourages disciplined savings.</li>
                <li>Provides access to lump sum amounts during emergencies.</li>
                <li>Flexibility in terms of contributions and auctions.</li>
                <li>No need for formal credit checks or loans.</li>
                <li>
                  At Bala Sri Thandayuthapani Chit Funds, the full amount is
                  disbursed without any deductions, no matter when you withdraw.
                </li>
                <li>
                  We offer 10-month, 15-month, and 20-month chit plans based on
                  your preference, with structured, fixed contributions.
                </li>
                <li>
                  Collections are available daily, monthly, or on specific days,
                  offering great convenience.
                </li>
                <li>
                  Our unique vacant list allows easy addition of new customers.
                </li>
              </ul>
              <p className="mt-4 text-violet-700 italic">
                "Our journey towards your growth through a new endeavor.
              </p>
              <p className="text-violet-700 italic">
                Join us with trust and bond with currency."
              </p>
            </motion.section>

            {/* Documents Required Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                Documents Required
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 text-lg">
                <li>Identity Proof (Aadhaar, Passport, etc.)</li>
                <li>3 Passport-sized photographs</li>
                <li>Agreement Sign </li>
                <li>Signed agreement provided by the company</li>
              </ul>
            </motion.section>

            {/* Eligibility Criteria Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
                Eligibility Criteria
              </h2>
              <p className="text-gray-700 text-lg">
                To participate in a chit fund, individuals typically need to
                meet the following criteria:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                <ul className="list-disc list-inside ml-6 text-gray-700 text-lg">
                  <li>Must be at least 18 years old.</li>
                  <li>Must have a valid identity proof.</li>
                  <li>Must have a stable source of income.</li>
                  <li>
                    Must be willing to adhere to the chit funds terms and
                    conditions.
                  </li>
                  <li>
                    If a customer resides abroad, local people’s assurance is
                    mandatory.
                  </li>
                </ul>
              </ul>
            </motion.section>
               {/* Terms and Conditions */}
            <motion.section
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6 mt-6">
                Terms and Conditions
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 text-lg">
                <li>
                  <strong>Payment Deadline:</strong> Pay within the specified
                  time on the specified date.
                </li>
                <li>
                  <strong>Group Membership:</strong> Only those who pay will be
                  added to groups.
                </li>
                <li>
                  <strong>Guarantor Rule:</strong> A guarantor is needed if only
                  3 people qualify for a ticket.
                </li>
                <li>
                  <strong>Required Documents:</strong> Provide Aadhaar, Bank
                  Card, Voter ID, Photo, Check Leap Guarantee, and Placement
                  Slip or proper document. Government staff witness may be
                  required to sign.
                </li>
                <li>
                  <strong>Group Membership Duration:</strong> New members stay
                  in groups for at least 5 months.
                </li>
                <li>
                  <strong>Fixed Payment Mode:</strong> Payments are made in a
                  fixed mode.
                </li>
                <li>
                  <strong>Bettor Rule:</strong> If a bettor stands in, payment
                  is made at the end of the slip with a 2.5%-5% charge.
                </li>
                <li>
                  <strong>Chit Options:</strong> Offers include 10-month and
                  20-month chits. Money can be collected daily, weekly, or
                  monthly.
                </li>
                <li>
                  <strong>Final Decision:</strong> Management's decision is
                  final.
                </li>
              </ul>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chits;
