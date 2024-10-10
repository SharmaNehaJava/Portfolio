/* eslint-disable react/prop-types */
import '../../CSS/Modal.css';
import budget from '../../../public/Modal1/Model1_0.png';
import budget1 from '../../../public/Modal1/Model1_1.png';
import budget2 from '../../../public/Modal1/Model1_2.png';
import budget3 from '../../../public/Modal1/Model1_3.png';
import budget4 from '../../../public/Modal1/Model1_4.png';

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react';

export default function Modal({ setShowModal }) {
    const [image, setImage] = useState(budget4);

    const handleChangeImg = (e) => {
        setImage(e.target.src);
    }

    const handleChangeImgOut = () => {
        setImage(budget4);
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setShowModal(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [setShowModal]);

    return (
        <div className='modal'>
            <div className='scroll_model'>
                <div className='cross1'>
                    <IoClose className='cross' onClick={() => { setShowModal(false); }} tabIndex={0} />
                </div>
                <div className='Heading'>
                    <h1>Uni-Bus</h1>
                </div>
                <div>
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        <a href='https://uni-3ostcm0in-nehas-projects-66b4a8e9.vercel.app/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/SharmaNehaJava/Uni-Bus' target="_blank" rel="noreferrer">
                            SOURCE CODE
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='image-con'>
                        <img src={image} alt='Ai-SaaS' className='main-image' />
                        <div className='image_con2 border-2 border-gray-400 bg-gray-300 p-2 rounded shadow-lg'>
                            {[budget, budget1, budget2, budget3].map((img, index) => (
                                <img
                                    key={index}
                                    onMouseEnter={handleChangeImg}
                                    onMouseOut={handleChangeImgOut}
                                    className={`items ${img === image ? 'active' : ''} p-1 bg-gray-400 border-2 border-white`}
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='image-con1'>
                        <div className='description'>
                            <strong>Description</strong>
                        </div>
                        <p className='para'>
                            This project is based on the idea to provide a platform for bus transportation where daily peddlers can also use bus services by recharging their account.
                        </p>

                        <div className='tech text-black'>
                            <strong>Technology Used</strong>
                        </div>
                        <div className='tech_used text-black'>
                            <div className='boarderClass'>React</div>
                            <div className='boarderClass'>Next.js</div>
                            <div className='boarderClass'>MongoDB</div>
                            <div className='boarderClass'>Tailwind CSS</div>
                        </div>

                        <h1 className='feature'>Features</h1>
                        <p className='para'>
                            <div>Secure Authentication</div>
                            <div>Shows all the Bus Routes</div>
                            <div>Easy and Safe Money Transfer</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
