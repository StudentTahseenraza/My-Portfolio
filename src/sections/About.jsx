import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20 c-space" id="about">
      <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/img5.jpg" alt="img" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m  Tahseen Raza</p>
              <p className="grid-subtext">
              I am a passionate Full-Stack Developer currently pursuing my B.Tech degree.
              With a strong foundation in both frontend and backend development, I specialize in 
              building scalable, efficient, and user-friendly web applications. Throughout my journey, 
              I have worked on multiple projects, ranging from AI-driven applications to community-driven platforms, 
              showcasing my ability to solve real-world problems with technology.
              My expertise includes modern frameworks and technologies like React.js, 
              Node.js, and database management, ensuring seamless and high-performance applications. 
              Constantly striving to learn and improve, I am eager to take on new challenges and contribute 
              to impactful projects in the tech industry.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid5.png" alt="grid-5" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack and Tools</p>
              <p className="grid-subtext">
              I specialize in a variety of languages, frameworks, and tools that enable me to build robust, scalable, and efficient applications. My expertise spans both frontend and backend technologies, ensuring seamless development and deployment of full-stack applications.
              Frontend: React.js, Vite, JavaScript, HTML, CSS
              Backend: Node.js, Express.js
              Databases: MongoDB, MySQL
              Tools & Platforms: Git, GitHub, WebSockets, Selenium
              AI & Automation: Web Scraping, Generative AI Development
              Other Skills: RESTful APIs, Authentication, Deployment
              I am always eager to explore new technologies and enhance my skill set to stay ahead in the ever-evolving tech landscape. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
              </div>
                <div>
                  <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                  <p className="grid-subtext">
                    I live in Hyderabad, Telangana, India and am open to remote work worldwide and in-office opportunities.
                  </p>
                  <a
                    href="mailto:toushifraza2015@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                  </a>
                <div className="flex flex-col gap-2 mt-4 text-white-600">
                  <p>Email: <a href="mailto:toushifraza2015@gmail.com" className="hover:underline">toushifraza2015@gmail.com</a></p>
                  <a
                    href="https://github.com/StudentTahseenraza" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                  </a>
                  <a
                    href="https://linkedin.com/in/tahseen-raza-7500ab274" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img src="/assets/linked.png" alt="linkedin" className="w-1/2 h-1/2" /> 
                  </a>
                  
                  <a
                    href="https://leetcode.com/u/_tahseen_raza/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img src="/assets/leetcode.webp" alt="leetcode" className="w-1/2 h-1/2" />
                  </a>
               </div>
           </div>
        </div>
      </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I love solving problems and bringing ideas to life through code. For me, programming isn’t just a profession—it’s a passion. 
              I thrive on the challenge of creating efficient, scalable solutions and continuously exploring new technologies to enhance my skills. 
              Whether it’s developing intuitive user interfaces, optimizing backend performance, or working on AI-driven applications, I find joy in every aspect of the development process.
              My curiosity and dedication drive me to keep learning, experimenting, and pushing the boundaries of what’s possible with technology.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-center grid-subtext">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="font-medium text-white lg:text-2xl md:text-xl text-gray_gradient">toushifraza2015@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
