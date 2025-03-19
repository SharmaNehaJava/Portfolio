/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { BsOpencollective } from "react-icons/bs";
import { motion } from 'framer-motion';

import Modal from './Modal/Modal.jsx';
import Modal1 from './Modal/Modal1';
import Modal2 from './Modal/Modal2';

import AppWrap from './Wrapper/AppWrap';
import MotionWrap from './Wrapper/MotionWrap';

import '../CSS/Work.css';

const Work = () => {
  const worksData = [
    {
      title: 'Hawkers',
      description: 'A platform connecting local street vendors with customers for better accessibility.',
      projectLink: 'http://hawkers-frontend.vercel.app/',
      codeLink: 'https://github.com/SharmaNehaJava/Hawkers-Frontend',
      tags: ['MERN'],
      imgUrl: '/Modal/Modal_0.png',
    },
    {
      title: 'UniBus',
      description: 'A university bus tracking system to provide real-time location updates to students.',
      projectLink: 'https://uni-3ostcm0in-nehas-projects-66b4a8e9.vercel.app/',
      codeLink: 'https://github.com/SharmaNehaJava/Uni-Bus',
      tags: ['MERN'],
      imgUrl: '/Modal1/Model1_0.png',
    },
    {
      title: 'EasyFill',
      description: 'An easy-to-use system for refilling and managing product inventories for vendors.',
      projectLink: 'https://sharmanehajava.github.io/EasyFill/',
      codeLink: 'https://github.com/SharmaNehaJava/EasyFill',
      tags: ['Frontend'],
      imgUrl: '/Modal2/Modal2_0.png',
    },
  ];

  const [filterWork, setFilterWork] = useState(worksData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModal = () => setShowModal(!showModal);
  const handleModal1 = () => setShowModal1(!showModal1);
  const handleModal2 = () => setShowModal2(!showModal2);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(worksData);
      } else {
        setFilterWork(worksData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const nameHandler = (title) => {
    if (title === 'Hawkers') {
      handleModal();
    } else if (title === 'UniBus') {
      handleModal1();
    } else if (title === 'EasyFill') {
      handleModal2();
    }
  };

  return (
    <div id="projects-section" className="text-white p-6 m-0 w-screen  min-h-screen">
      <h2 className="text-3xl lg:text-5xl text-center font-bold flex-1  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 ">
        PROJECTS
      </h2>

      {/* Filter Buttons */}
      <div className="bg-gray-900 m-4 p-1 rounded-md">
        <div className="flex justify-center space-x-4  p-4 rounded-md">
          {['Frontend', 'MERN', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`cursor-pointer text-sm sm:text-base py-2 px-4 rounded-lg ${activeFilter === item ? 'bg-orange-400' : 'bg-gray-600 hover:bg-gray-500'}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-600"
        >
          {filterWork.map((work, index) => (
            <div className="relative group bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl" key={index}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={work.imgUrl}
                  alt={work.name}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="text-white text-2xl"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="text-white text-2xl"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="text-white text-2xl"
                  >
                    <BsOpencollective onClick={() => nameHandler(work.title)} />
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center mt-4">
                <h4 className="text-lg font-bold">{work.title}</h4>
                <p className="text-sm mt-2 text-gray-300">{work.description}</p>
                <div className="mt-2">
                  <span className="px-2 py-1 bg-orange-500 text-sm text-white rounded-full">
                    {work.tags[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Modals */}
        {showModal && <Modal setShowModal={setShowModal} />}
        {showModal1 && <Modal1 setShowModal={setShowModal1} />}
        {showModal2 && <Modal2 setShowModal={setShowModal2} />}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
