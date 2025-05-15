import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import FrameWorks from "../components/FrameWorks";
import { Tabs } from "../components/Tabs";
import { useMediaQuery } from "react-responsive";

const techTabs = [
  {
    title: "Languages",
    value: "languages",
    content: (
      <div className="p-4">
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
          <li>TypeScript</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "frameworks",
    content: (
      <div className="p-4">
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Flask</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Tools",
    value: "tools",
    content: (
      <div className="p-4">
        <ul>
          <li>Git</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>MongoDB</li>
        </ul>
      </div>
    ),
  },
];



const About = () => {
    const grid2Container = useRef();
    const isMobile = useMediaQuery({maxWidth:712})

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
                        style={{rotate:"-30deg",top:"60%",left:"45%"}}
                        text="OOPS"
                        containerRef={grid2Container}
                    />
                    <Card 
                        style={{rotate:"50deg",top:"40%",left:"70%"}}
                        text="Problem Solving" 
                        containerRef={grid2Container}
                    /> 
                    <Card
                        style={{rotate:"-45deg",top:"12%",left:"5%"}} 
                        text="DSA"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"-5deg",top:"70%",left:"10%"}} 
                        image={"/assets/logos/socket-dot-io.svg"}
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"-10deg",top:"10%",left:"85%"}} 
                        image={"/assets/logos/react.svg"}
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"-5deg",top:"70%",left:"70%"}} 
                        image={"/assets/logos/vitejs.svg"}
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"-5deg",top:"10%",left:"40%"}} 
                        image={"/assets/logos/git.svg"}
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{rotate:"0deg",top:"65%",left:"30%"}} 
                        image={"/assets/logos/aws.svg"}
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
                        Feel free to get in touch or download my resume to learn more about my background.
                    </p>
                    <a
                    href="https://drive.google.com/file/d/1nZyFfUfmNT2iWD5Uu5V4e90OYKELdzVl/view?usp=sharing"
                    download
                    className="flex flex-row items-center gap-2 px-6 py-4 text-sm text-white text-center 
                                bg-gradient-to-r bg-primary rounded-4xl cursor-pointer hover-animation w-fit"
                    >
                        <img src="/assets/download.svg" alt="Download" className="size-6" />
                        Resume
                    </a>
                </div>
            </div>
            {/* grid 5 */}
            <div className="grid-default-color grid-5 grid-cols-1 md:grid-cols-2">
                <div className="z-10 w-[50%]">
                    <p className="headtext">
                        Tech Stack
                    </p>
                    
                    <Tabs tabs={techTabs} />

                </div>
                {!isMobile && <div className="absolute inset-y-0 md:inset-y-9 w-full h-full
                start-[60%] md:scale-125 md:block">
                    <FrameWorks/> 
                </div>}
            </div>
        </div>
    </section>
  )
}

export default About