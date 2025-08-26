import React from "react";
import { motion } from "framer-motion";

type Dignitary = {
  name: string;
  role: string;
  designation: string;
  image: string;
};

const dignitaries: Dignitary[] = [
  {
    name: "Shri Dharmendra Pradhan",
    role: "Chief Guest",
    designation: "Honourable Minister of Education, Government of India",
    image:
      "https://via.placeholder.com/300x350/ffffff/000000?text=Dharmendra+Pradhan",
  },
  {
    name: "Prof. XYZ Kumar",
    role: "Guest of Honour",
    designation: "Director, IIIT Bhagalpur",
    image:
      "https://via.placeholder.com/300x350/ffffff/000000?text=Prof.+XYZ+Kumar",
  },
  {
    name: "Shri PQR Verma",
    role: "Special Guest",
    designation: "Secretary, MHRD",
    image:
      "https://via.placeholder.com/300x350/ffffff/000000?text=Shri+PQR+Verma",
  },
  {
    name: "Prof. LMN Singh",
    role: "Chairperson",
    designation: "Board of Governors, IIIT Bhagalpur",
    image:
      "https://via.placeholder.com/300x350/ffffff/000000?text=Prof.+LMN+Singh",
  },
];

const Dignotaries: React.FC = () => {
  return (
    <motion.section
      id="dignitaries"
      className="w-full py-20 px-4 relative overflow-hidden text-gray-600"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
{/* Section Header */}
<motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mb-16"
>
  <div className="inline-block relative">
    <h2 className="relative inline-block px-6 py-2 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide
      bg-gradient-to-r from-pink-500  to-pink-400 bg-clip-text text-transparent">
      Dignitaries
    </h2>
    <div className="mt-3 w-20 h-1 mx-auto bg-gradient-to-r from-pink-500  to-pink-400 rounded-full shadow-md"></div>
  </div>
</motion.div>


      <div className="flex flex-col items-center gap-12 relative">
        {/* Chief Guest Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative"
        >
          <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-10 w-full max-w-2xl text-center border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative mb-6">
              <img
                src={dignitaries[0].image}
                alt={dignitaries[0].name}
                className="relative w-48 h-60 mx-auto object-cover shadow-md rounded-md"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {dignitaries[0].name}
              </h3>
              <p className="text-md font-semibold">{dignitaries[0].role}</p>
              <p className="text-sm">{dignitaries[0].designation}</p>
            </div>
          </div>
        </motion.div>

        {/* Other Dignitaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {dignitaries.slice(1).map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={person.image}
                  alt={person.name}
                  className="relative w-40 h-52 mx-auto object-cover shadow-md rounded-md"
                />
                <div className="space-y-2 mt-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold">{person.role}</p>
                  <p className="text-sm">{person.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Dignotaries;
