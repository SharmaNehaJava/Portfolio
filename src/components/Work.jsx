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
      projectLink: '#',
      codeLink: 'https://github.com/SharmaNehaJava/Hawkers-Frontend',
      tags: ['MERN'],
      imgUrl: '/images/Modal_0.png',  // Ensure correct image path
    },
    {
      title: 'UniBus',
      description: 'A university bus tracking system to provide real-time location updates to students.',
      projectLink: 'https://uni-3ostcm0in-nehas-projects-66b4a8e9.vercel.app/',
      codeLink: 'https://github.com/SharmaNehaJava/Uni-Bus',
      tags: ['MERN'],
      imgUrl: '/images/Modal1_0.png',
    },
    {
      title: 'EasyFill',
      description: 'An easy-to-use system for refilling and managing product inventories for vendors.',
      projectLink: 'https://sharmanehajava.github.io/EasyFill/',
      codeLink: 'https://github.com/SharmaNehaJava/EasyFill',
      tags: ['Frontend'],
      imgUrl: '/images/Modal2_0.png',
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
    <div id="projects-section" className='text-white'>
      <h2 className="text-8xl text-center font-bold pt-4">P<span className='text-4xl animate-pulse underline '>rojects</span></h2>

      <div className='bg-gray-900 m-4 p-1 rounded-md'>
        <div className="app__work-filter bg-gray-800 rounded-md">
          {['Frontend', 'MERN', 'All'].map((item, index) => (
            <div
              key={index + 1}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsOpencollective onClick={() => nameHandler(work.title)} />
                  </motion.div>

                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

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
 