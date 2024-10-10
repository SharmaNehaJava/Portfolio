/* eslint-disable react/prop-types */
import '../../CSS/Modal.css';
import budget from '../../../public/Modal2/Modal2_0.png'
import budget1 from '../../../public/Modal2/Modal2_1.png'
import budget2 from '../../../public/Modal2/Modal2_2.png'
import budget3 from '../../../public/Modal2/Modal2_3.png'
import budget4 from '../../../public/Modal2/Modal2_4.png'

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
                        <img src={image} alt='Ai-SaaS' />
                        <div className='image_con2 border-2 border-gray-400 bg-gray-300 p-2 rounded shadow-lg'>
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget1} alt='Image 1' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget2} alt='Image 2' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget} alt='Image 3' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items p-1 bg-gray-400 border-2 border-white' src={budget3} alt='Image 4' />
                        </div>
                    </div>

                    <div className='image-con1'>
                        <div className='description'>
                            <strong>Description</strong>
                        </div>
                        <p className='para'>
                            Simple website for My college, Sharda University. Online Form Filling and Submissions. To reduce the load of old paper collection, preservation and time saving.
                        </p>

                        <div className='tech text-black'>
                            <strong>Technology Used</strong>
                        </div>
                        <div className='tech_used text-black'>
                            <div className='boarderClass'>html</div>
                            <div className='boarderClass'>css</div>
                            <div className='boarderClass'>javaScript</div>
                           
                        </div>

                        <h1 className='feature'>Features</h1>
                        <p className='para'>
                            <div>Easy and friendly UI/UX</div>
                            <div>Diverse Options for froms like Undertaking, Medical, Internship, FI/FR, etc. </div>
                            <div>filtering of the mentor assigned to send the info.</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
