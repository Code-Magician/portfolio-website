import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [certificates, setCertificates] = useState([]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "certificates"]';

        client.fetch(query).then((data) => {
            setCertificates(data);
        });
    }, []);

    return (
        <>
            <motion.div className='header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className='head-text'>Certificates <span>&</span> Achievements</h2>
            </motion.div>

            {certificates.length && (
                <>
                    <div className="app__certificates-item app__flex">
                        <div className="app__certificates-content">
                            <h2 >{certificates[currentIndex].name}</h2>
                            <div>
                                <h4 className="bold-text">{certificates[currentIndex].by}</h4>
                                <h5 className="p-text">Issue Date : {certificates[currentIndex].issueDate}</h5>
                            </div>
                        </div>
                        <img src={urlFor(certificates[currentIndex].imgurl)} alt={certificates[currentIndex].name} />
                    </div>

                    <div className="app__certificates-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
    'certificates',
    'app__primarybg',
);