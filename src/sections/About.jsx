import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import FrameWorks from "../components/FrameWorks";

const About = () => {
    const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing pt-24">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12">
            {/* grid 1 */}
            <div className="flex items-end grid-default-color 
            grid-1">
                <img 
                    src="assets/coding-pov.png" 
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
                    md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                />
                <div className="z-10">
                    <p className="headtext">
                        Hi, I'm Guna Sai
                    </p>
                    <p className="subtext">
                        I'm a passionate software engineer with a love for coding and technology. 
                        I enjoy creating innovative solutions and exploring new technologies.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none
                -bottom-4 h-1/2 bg-gradient-to-t from-indigo"/>
            </div>
            {/* grid 2 */}
            <div className="grid-default-color grid-2">
                <div 
                ref={grid2Container}
                className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                    </p>
                    <Card 
                        style={{rotate:"70deg",top:"30%",left:"20%"}} 
                        text="GRASP" 
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"-30deg",top:"60%",left:"45%"}}
                        text="SOLID"
                        containerRef={grid2Container}
                    />
                    <Card 
                        style={{rotate:"90deg",top:"40%",left:"70%"}}
                        text="Design Patterns" 
                        containerRef={grid2Container}
                    /> 
                    <Card
                        style={{rotate:"-45deg",top:"55%",left:"0%"}} 
                        text="Design Principles"
                        containerRef={grid2Container}
                    />
                    TODO: add images
                    <Card
                        style={{rotate:"-5deg",top:"55%",left:"0%"}} 
                        image={"/assets/logos/"}
                        containerRef={grid2Container}
                    />
                </div>
            </div>
            {/* grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">
                        Time Zone
                    </p> 
                    <p className="subtext">
                        I'm currently based in India (IST) and available for work.
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/* grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4
                size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together?
                    </p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">
                        Tech Stack
                    </p>
                    <p className="subtext">
                        I have experience in a variety of technologies, including React, Node.js, and more.
                        I'm always eager to learn new skills and improve my craft.
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full
                start-[50%] md:scale-125">
                    <FrameWorks/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default About