import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import Astronaut from '../components/Astronaut'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import Loader from '../components/Loader'

function Hero() {
  const isMobile = useMediaQuery({maxWidth:853})
  return (
    <section className='flex items-start justify-center md:items-start 
    md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0'
            style={{width:"100vw", height:"100vh"}}
        >
            <Canvas camera={{position:[0,1,3]}}>
              <Suspense fallback={<Loader/>}> 
                <Float>
                    <Astronaut 
                    scale={isMobile && 0.23} 
                    position={isMobile && [0,-1.5,0]}
                  />
                </Float>
              </Suspense>
            </Canvas>
          
        </figure>
    </section>
  )
}


export default Hero