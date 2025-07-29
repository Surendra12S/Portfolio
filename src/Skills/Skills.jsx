import './Skills.css';
import htmlIcon from '../assets/htmlIcon.png';
import cssIcon from '../assets/cssIcon.png';
import jsIcon from '../assets/javascriptIcon.png';
import reactIcon from '../assets/reactjsIcon.png';
import nodeIcon from '../assets/nodeIcon.png';
import expressIcon from '../assets/expressIcon.png';
import mongoIcon from '../assets/mongodbIcon.png';    
import postmanIcon from '../assets/postmanIcon.png';
import gitIcon from '../assets/gitIcon.png';
import githubIcon from '../assets/githubIcon.png';
import stripeIcon from '../assets/stripeIcon.png';
import sqlIcon from './../assets/databaseIcon.png';
import verselIcon from '../assets/vercel.png';
import renderIcon from '../assets/render.png';
import mongooseIcon from '../assets/mongoose.png';
import { GlareCard } from "../GlareCard/GlareCard";

function Skills(){

    return(
         
        <div className="skills-container">
           <div className="grid-container">
                <div className="grid-background" />
                <div className="grid-mask" />
                <h1>Skills</h1>

                <div className='laguageImages' >
                    <h2>Technical skills :</h2>
                    <GlareCard><img src={htmlIcon} /></GlareCard>
                    <GlareCard><img src={cssIcon} /></GlareCard>
                    <GlareCard><img src={jsIcon} /></GlareCard>
                    <GlareCard><img src={reactIcon} /></GlareCard>
                    <GlareCard><img src={nodeIcon} /></GlareCard>
                    <GlareCard><img className='expressImg' src={expressIcon} /></GlareCard>

                    <div className='techSkillsSectionTwo' >
                        <GlareCard><img className='sqlIcon' src={sqlIcon} /></GlareCard>
                        <GlareCard><img src={mongooseIcon} /></GlareCard>
                        <GlareCard><img src={mongoIcon} /></GlareCard>
                    </div>
                </div>

                <div className='toolsImages'> 
                    <h2>Tools :</h2>
                    <GlareCard><img src={postmanIcon}/></GlareCard>
                    <GlareCard><img src={gitIcon} /></GlareCard>
                    <GlareCard><img className='githubImg' src={githubIcon} /></GlareCard>
                    <GlareCard><img src={stripeIcon} /></GlareCard>
                    <GlareCard><img src={verselIcon} /></GlareCard>
                    <GlareCard><img  src={renderIcon} /></GlareCard>
                </div>
            </div>
        </div>
    )
}
export default Skills;
