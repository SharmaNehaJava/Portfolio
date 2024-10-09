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
                    <h1>Ai-SAAS</h1>
                </div>
                <div>
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        <a href='https://ai-saa-s-one.vercel.app/' target="_blank" rel="noreferrer">
                            LIVE DEMO
                        </a>
                    </div>
                    <div className='Demo-live'>
                        <a href='https://github.com/vivekkumar2909/Ai-SaaS' target="_blank" rel="noreferrer">
                            SOURCE CODE
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='image-con'>
                        <img src={image} alt='Ai-SaaS' />
                        <div className='image_con2'>
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget1} alt='Image 1' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget2} alt='Image 2' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget} alt='Image 3' />
                            <img onMouseEnter={handleChangeImg} onMouseOut={handleChangeImgOut} className='items' src={budget3} alt='Image 4' />
                        </div>
                    </div>

                    <div className='image-con1'>
                        <div className='description'>
                            <strong>Description</strong>
                        </div>
                        <p className='para'>
                            This project is an advanced AI-driven SaaS platform designed to provide users with a wide range of generative capabilities using the powerful OpenAI API...
                        </p>

                        <div className='tech'>
                            <strong>Technology Used</strong>
                        </div>
                        <div className='tech_used'>
                            <div className='boarderClass'>React</div>
                            <div className='boarderClass'>Next.js</div>
                            <div className='boarderClass'>MongoDB</div>
                            <div className='boarderClass'>Tailwind CSS</div>
                            <div className='boarderClass'>PrismaDB</div>
                        </div>

                        <h1 className='feature'>Features</h1>
                        <p className='para'>
                            <div>1. Code Generation: Effortlessly generate code snippets, functions, or entire modules...</div>
                            <div>2. Image Generation: Users can create custom images by specifying detailed prompts...</div>
                            <div>3. Video Generation: Transform text prompts into dynamic video content...</div>
                            <div>4. Conversation Generation: Build realistic and context-aware conversations...</div>
                            <div>5. Music Generation: Compose unique music tracks based on user inputs...</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
