/* eslint-disable react/prop-types */
import '../../CSS/Modal.css';
import budget from '../../../public/Modal/Modal_0.png'
import budget1 from '../../../public/Modal/Modal_1.png'
import budget2 from '../../../public/Modal/Modal_2.png'
import budget3 from '../../../public/Modal/Modal_3.png'
import budget4 from '../../../public/Modal/Modal_4.png'

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
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div className='modal'>
            <div className='scroll_model'>
                <div className='cross1'>
                    <IoClose className='cross' onClick={() => { setShowModal(false) }} />
                </div>
                <div className='Heading'>
                    <h1>Hawkers</h1>
                </div>
                <div>
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        <a href='#' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/SharmaNehaJava/Hawkers-Frontend' target="_blank" rel="noreferrer">
                            SOURCE CODE
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='image-con'>
                        <img src={image} alt='Ai-SaaS' />
                        <div className='image_con2  border-2 border-gray-400 bg-gray-300 p-2 rounded shadow-lg'>
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget1} alt='Image 1' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget2} alt='Image 2' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget} alt='Image 3' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget3} alt='Image 4' />
                        </div>
                    </div>

                    <div className='image-con1 text-black'>
                        <div className='description'>
                            <strong>Description</strong>
                        </div>
                        <p className='para'>
                        "Hawkers" is a web platform designed to connect customers with local street vendors, enhancing visibility and accessibility for hawkers in urban areas. Our goal is to promote economic empowerment for street vendors and foster community engagement.
                        </p>

                        <div className='tech'>
                            <strong>Technology Used</strong>
                        </div>
                        <div className='tech_used'>
                            <div className='boarderClass'>React</div>
                            <div className='boarderClass'>Express</div>
                            <div className='boarderClass'>MongoDB</div>
                            <div className='boarderClass'>Tailwind CSS</div>
                            {/* <div className='boarderClass'></div> */}
                        </div>

                        <h1 className='feature'>Features</h1>
                        <p className='para'>
                            <div><span className='text-blue-800'>Real-Time Location Tracking:</span> Easily locate nearby street vendors in real-time.</div>
                            <div><span className='text-blue-800'> Diverse Product Range:</span> Explore a wide variety of products, from delicious street food to unique accessories.</div>
                            <div><span className='text-blue-800'>Customer Notifications:</span>  Receive alerts when your favorite vendors are nearby.</div>
                            <div><span className='text-blue-800'> Vendor Profiles:</span>  Detailed profiles of vendors and their offerings for informed choices. </div>
                        </p>
                        <h1 className='feature'>Objectives</h1>
                        <p>Boost the economic stability of street vendors. Improve customer convenience and access to local goods. Strengthen community support for local businesses. Impact: "Hawkers" aims to create a more equitable and vibrant street vending ecosystem, enriching urban communities and revitalizing local markets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
