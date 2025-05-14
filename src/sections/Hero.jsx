/* eslint-disable no-unused-vars */
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'

function Hero() {
  const isMobile = useMediaQuery({maxWidth:853})
  return (
    <section id='home' className='flex items-start justify-center md:items-start 
    md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0 pointer-events-none '>
          {!isMobile && <motion.img
            src='/assets/Astronaut-rafiki (2).svg'
            alt='Astronaut'
            className={`absolute rotate-[290deg]`}
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
              ease: 'easeInOut' 
            }}
            style={{
              width:'100vw',
              height:'100vh',
              top: '5%',
              left:'20%',
            }}
          />}
        </figure>

        
    </section>
  )
}


export default Hero