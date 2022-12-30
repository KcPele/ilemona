import React from 'react'
import Image from 'next/image'
import { laptop, facebook, google, design } from '../assets'
import { motion } from 'framer-motion'
const Usage = () => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.7 }} className='section__padding'>
    <div className='usage__content'>
        <div className='usage__content-subsection'>
            <p>Used by over 10,000 people and teams</p>
            <div className='usage__content-logos'>
            <Image className='google'  src={google} width="99" alt="google" height="30" />
            <Image className='facebook' src={facebook} alt="facebook" width="146" height="28" />
            <Image className='design' src={design}  alt="design" width="220" height="28" />
            </div>
        </div>
        <div className='usage__content-img'>
            <div>
            <Image className='usage__content-img_laptop' src={laptop} alt="laptop" width="607" height="344" />
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Usage