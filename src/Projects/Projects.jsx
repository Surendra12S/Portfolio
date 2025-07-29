import './Projects.css';  
import FirstProjectImg from '../assets/ProjectImg.png';
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import secondProjectImg from '../assets/secondPrj.png';
import amozonImg from '../assets/amozone.png';
import ToDoListImg from '../assets/todoList.png'



function Projects(){

  

  const handleClike = ()=>{
   window.open('https://item-near-by.vercel.app/', '_blank');
  }

  const handleFirstGitLink = () =>{
    window.open('https://github.com/Surendra12S/ItemNearBy', '_blank' )
  }

  const projectTwoLiveLink = () =>{
    window.open('https://food-delivery-frontend-69x1.onrender.com','_blank')
  }
   
  const projectTwoGit = () =>{
    window.open('https://github.com/Surendra12S/Food-Delivery-Website','_blank')
  }

  const projectThreeGit = () =>{
    window.open('https://github.com/Surendra12S/Amazon-Clone-','blank')
  }

  const projectFourGit = () =>{
    window.open('https://github.com/Surendra12S/To-Do-List-App','_blank')
  }

  const projectFourLive = ()=>{
    window.open('https://to-do-list-app-zcy7.vercel.app/','_blank')
  }

    return(
        <div className='ProjectsContainer'>
               <div className="grid-containers">
               <div className="grid-backgrounds" />
               <div className="grid-masks" />
              <h1 className='projectHeading' >Projects</h1>
              <div className='FirstTwoProjects' >
                  <div className='projectOne' >
                  <img src={FirstProjectImg} />
                  <h1>ItemNearBy</h1>
                  <p>ItemNearBy is a full-stack web app that connects customers with nearby shops to check item availability through real-time messaging.</p>
                  <div className='projectTechStack'> 
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                  </div>
                  <div>
                    <button onClick={handleClike}><RiExternalLinkFill />Live Demo</button>
                    <button onClick={handleFirstGitLink} ><IoLogoGithub />View Code</button>
                  </div>
                  
              </div>
              <div className='projectTwo'>
                     <img src={secondProjectImg} />
                      <h1>Food Delivery Website</h1>
                      <p>A full-stack food ordering platform where users can browse menus, place orders, and track deliveries in real time.</p>
                      <div className='projectTechStack'>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Mongoose</span>
                      </div>
                      <div>
                        <button onClick={projectTwoLiveLink} ><RiExternalLinkFill />Live Demo</button>
                        <button onClick={projectTwoGit} ><IoLogoGithub />View Code</button>
                      </div>
              </div>
              </div>
              <div className='SecondTwoProjects'> 
                <div className='projectThree'>
                    <img src={amozonImg} />
                    <h1>Amazone Clone</h1>
                    <p>A full-stack e-commerce platform that allows users to browse products, add items to their cart, and complete purchases.</p>
                    <div className='projectTechStack'>
                      <span>React</span>
                      <span>Node.js</span>
                      <span>Express</span>
                      <span>MongoDB</span>
                      <span>Mongoose</span>
                    </div>
                    <div>
                      <button><RiExternalLinkFill />Live Demo</button>
                      <button onClick={projectThreeGit} ><IoLogoGithub />View Code</button>
                    </div>

                </div>
                <div className='projectFour'>
                  <img src={ToDoListImg} />
                  <h1>To-Do List</h1>
                  <p> A simple and intuitive task manager that helps users organize tasks efficiently and stores data locally using browser's local storage.</p>
                  <div className='projectTechStack'>  
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <button onClick={projectFourLive}  ><RiExternalLinkFill />Live Demo</button>
                    <button onClick={projectFourGit} ><IoLogoGithub />View Code</button>
                    </div>
 
                </div>
              </div>
              
            </div>
            
        </div>
    )

}
export default Projects;