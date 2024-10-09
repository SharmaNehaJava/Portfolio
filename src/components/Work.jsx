/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { BsOpencollective } from "react-icons/bs";
import { motion } from 'framer-motion';

import Modal from './Modal/Modal.jsx';
import Modal1 from './Modal/Modal1';
import Modal2 from './Modal/Modal2'

import AppWrap from './Wrapper/AppWrap';
import MotionWrap from './Wrapper/MotionWrap';

import { urlFor, client } from '../Client.jsx';
import '../CSS/Work.css';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [showModal, setShowModal] = useState(false)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);

      setFilterWork(data);
    });
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
    console.log("handle")
  }
  const handleModal1 = () => {
    setShowModal1(!showModal1);
    console.log("handle")
  }
  const handleModal2 = () => {
    setShowModal2(!showModal2);
    console.log("handle")
  }

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const nameHandler = (title) => {
    console.log(title);
    if (title === 'Budget-Trecker') {
      handleModal()
    }
    if (title === 'IMDB-Clone') {
      console.log(title);
      handleModal1()
    }
    if (title === 'Ai SaaS') {
      handleModal2()
    }
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Backend', 'UI/UX', 'Web App', 'Next JS', 'React JS', 'All'].map((item, index) => (
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
            <div
              className="app__work-img app__flex"

            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

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
                  <BsOpencollective onClick={() =>
                    nameHandler(work.title)
                  } />
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

      {
        showModal && <Modal1 setShowModal={setShowModal} />
      }
      {
        showModal1 && <Modal2 setShowModal={setShowModal1} />
      }
      {
        showModal2 && <Modal setShowModal={setShowModal2} />
      }
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);