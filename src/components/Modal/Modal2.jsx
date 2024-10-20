/* eslint-disable react/prop-types */
import '../../CSS/Modal.css';
import budget from '../../../public/Modal2/Modal2_0.png';
import budget1 from '../../../public/Modal2/Modal2_1.png';
import budget2 from '../../../public/Modal2/Modal2_2.png';
import budget3 from '../../../public/Modal2/Modal2_3.png';
import budget4 from '../../../public/Modal2/Modal2_4.png';

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react';

export default function Modal({ setShowModal }) {
    const [image, setImage] = useState(budget4);

    const handleChangeImg = (e) => {
        setImage(e.target.src);
    };

    const handleChangeImgOut = () => {
        setImage(budget4);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className='modal'>
            <div className='scroll_model'>
                <div className='cross1'>
                    <IoClose className='cross' onClick={() => setShowModal(false)} />
                </div>
                <div className='Heading'>
                    <h1>Easy-Fill</h1>
                </div>
                <div>
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        <a href='https://sharmanehajava.github.io/EasyFill/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/SharmaNehaJava/EasyFill' target="_blank" rel="noreferrer">
                            SOURCE CODE
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='image-con'>
                        <img src={image} alt='Ai-SaaS' className='main-image' />
                        <div className='image_con2 border-2 border-gray-400 bg-gray-300 p-2 rounded shadow-lg'>
                            {[budget1, budget2, budget, budget3].map((img, index) => (
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
                            Easy-Fill provides a fast and convenient way to manage forms and collect data online with secure submissions.
                        </p>

                        <div className='tech'>
                            <strong>Technology Used</strong>
                        </div>
                        <div className='tech_used text-black'>
                            <div className='boarderClass'>HTML</div>
                            {/* <div className='boarderClass'>Firebase</div> */}
                            <div className='boarderClass'>CSS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
