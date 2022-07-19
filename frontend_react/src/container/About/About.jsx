import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
    {
        title: 'Web Development',
        description: 'I am good at Web Development',
        imageURL: images.about01,
    },
    {
        title: 'Web Development',
        description: 'I am good at Web Development',
        imageURL: images.about02,
    },
    {
        title: 'Web Development',
        description: 'I am good at Web Development',
        imageURL: images.about03,
    },
    {
        title: 'Web Development',
        description: 'I am good at Web Development',
        imageURL: images.about04,
    }
];

const About = () => {
    return (
        <>
            <h2 className='head-text'>I Know that <span>Good App</span><br /> means <span>Good Business.</span></h2>

            <div className='app__profiles'>
                {
                    abouts.map(
                        (about, index) => (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                                className="app__profile-item"
                                key={about.title + index}
                            >
                                <img src={about.imageURL} alt={about.title} />
                                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                            </motion.div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default About