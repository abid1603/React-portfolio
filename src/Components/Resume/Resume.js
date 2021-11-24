import React from 'react';
import './Resume.css';
import {faReact,faJava,faPython,faJsSquare,faCuttlefish,faNodeJs
,faHtml5,faBootstrap,faUikit,faGit,faFigma,faMicrosoft,faAndroid} from '@fortawesome/free-brands-svg-icons';
import {faPencilAlt,faCamera,faDatabase} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const languages =[
    {
        icon: faReact,
        name: 'React',
        level: "80"
    },
    {
        icon: faJava,
        name: 'Java',
        level: "50"
    },
    {
        icon: faPython,
        name: 'Python',
        level: "40"
    },
    {
        icon: faJsSquare,
        name: 'JavaScript',
        level: "77"
    },
    {
        icon: faCuttlefish,
        name: 'C Programme',
        level: "70"
    },
    {
        icon: faNodeJs,
        name: 'Node JS',
        level: "55"
    },
    {
        icon: faHtml5,
        name: 'HTML & CSS',
        level: "88"
    },
    {
        icon: faBootstrap,
        name: 'BootStrap',
        level: "90"
    },
    {
        icon: faUikit,
        name: 'Material UI',
        level: "65"
    },
]

const tools =[
    {
        icon: faGit,
        name: 'Git',
        level: "60"
    },
    {
        icon: faFigma,
        name: 'Figma',
        level: "80"
    },
    {
        icon: faPencilAlt,
        name: 'Illustrator',
        level: "95"
    },
    {
        icon: faCamera,
        name: 'PhotoShop',
        level: "60"
    },
    {
        icon: faDatabase,
        name: 'Mongo DB',
        level: "55"
    },
    {
        icon: faMicrosoft,
        name: 'Microsoft Office',
        level: "95"
    },
    {
        icon: faAndroid,
        name: 'Android Studio',
        level: "55"
    }
]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row my-3">
                <div className="col-lg-6">
                    <h3 className="resume_card_heading">
                        Education
                    </h3>
                    <div className="resume_card_body">
                        <h5 className='resume_card_title'>Computer Science and Engineering</h5>
                        <h5 className='resume_card_title'>Daffodil International University</h5>
                        <p className='info'>I am Currently pursuing B.S.C in Computer Science and Engineering in 4th Year
                             from Daffodil International University.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="resume_card_heading">
                        Experience
                    </h3>
                    <div className="resume_card_body">
                        <h5 className='resume_card_title'>Graphics Designer</h5>
                        <h5 className='resume_card_title'>Coder Trust(6 months)</h5>
                        <p>I worked as a Graphics Designer In Local Market Place also in Fiver.
                            I have also Completed so many projects on Web Application and Web Developments.
                        </p>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume_languages">
                    <h4 className='resume_card_heading mb-4'>Language & Framework</h4>
                    <div className="resume_language-body">
                    {
                          languages.map(language=> 
                             <div className="backbar my-3">
                                 <div className="fontbar p-1"
                                 style={{'width':`${language.level}%`}}
                                 >
                                    <div className="d-flex  align-items-center justify-content-start">
                                        <FontAwesomeIcon className='language_icon px-2' icon={language.icon}></FontAwesomeIcon>
                                        <span className='language_name'>{language.name}</span>
                                        <span className='level'>{language.level}%</span>
                                    </div>
                                 </div>
                             </div>
                            )  
                    }
                </div>
                </div>
                <div className="col-lg-6 resume_tools">
                    <h4 className='resume_card_heading'>Tools & Framework</h4>
                    <div className="resume_tools-body">
                    {
                          tools.map(language=> 
                             <div className="backbar my-3">
                                 <div className="fontbar p-1"
                                 style={{'width':`${language.level}%`}}
                                 >
                                    <div className="d-flex  align-items-center justify-content-start">
                                        <FontAwesomeIcon className='language_icon px-2' icon={language.icon}></FontAwesomeIcon>
                                        <span className='language_name'>{language.name}</span>
                                        <span className='level'>{language.level}%</span>
                                    </div>
                                 </div>
                             </div>
                            )  
                    }
                </div>
                </div>
            </div>

        </div>
    );
};

export default Resume;