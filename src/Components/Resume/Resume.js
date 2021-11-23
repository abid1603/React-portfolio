import React from 'react';
import './Resume.css';
import python from '../Icons/LanguageIcon/python-brands.svg';
import react from '../Icons/LanguageIcon/react-brands.svg';
import bootstrap from '../Icons/LanguageIcon/bootstrap-brands.svg';
import C from '../Icons/LanguageIcon/c-solid.svg';
import java from '../Icons/LanguageIcon/java-brands.svg';
import nodjs from '../Icons/LanguageIcon/node-js-brands.svg';
import material from '../Icons/LanguageIcon/m-solid.svg';
import html from '../Icons/LanguageIcon/html5-brands.svg';
import javascript from '../Icons/LanguageIcon/js-square-brands.svg';

import git from '../Icons/ToolsIcon/git-brands.svg';
import figma from '../Icons/ToolsIcon/figma-brands.svg';
import illastetor from '../Icons/ToolsIcon/pen-ruler-solid.svg';
import photshop from '../Icons/ToolsIcon/camera-solid.svg';
import mongodb from '../Icons/ToolsIcon/database-solid.svg';
import microsoft from '../Icons/ToolsIcon/microsoft-brands.svg';
import android from '../Icons/ToolsIcon/android-brands.svg'; 


const languages =[
    {
        icon: {react},
        name: 'React',
        level: "80"
    },
    {
        icon: {java},
        name: 'Java',
        level: "50"
    },
    {
        icon: {python},
        name: 'Python',
        level: "40"
    },
    {
        icon: {javascript},
        name: 'JavaScript',
        level: "77"
    },
    {
        icon: {C},
        name: 'C Programme',
        level: "70"
    },
    {
        icon: {nodjs},
        name: 'Node JS',
        level: "55"
    },
    {
        icon: {html},
        name: 'HTML & CSS',
        level: "88"
    },
    {
        icon: {bootstrap},
        name: 'BootStrap',
        level: "90"
    },
    {
        icon: {material},
        name: 'Material UI',
        level: "65"
    },
]

const tools =[
    {
        icon: {git},
        name: 'Git',
        level: "60"
    },
    {
        icon: {figma},
        name: 'Figma',
        level: "80"
    },
    {
        icon: {illastetor},
        name: 'Illustrator',
        level: "95"
    },
    {
        icon: {photshop},
        name: 'PhotoShop',
        level: "60"
    },
    {
        icon: {mongodb},
        name: 'Mongo DB',
        level: "55"
    },
    {
        icon: {microsoft},
        name: 'Microsoft Office',
        level: "95"
    },
    {
        icon: {android},
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
                    <h4 className='resume_card_heading'>Language & Framework</h4>
                    <div className="resume_language-body">
                    {
                          languages.map(language=> 
                             <div className="backbar p-1 my-2">
                                 <div className="fontbar d-flex"
                                 style={{'width':language.level}}
                                 >
                                       <img src={language.icon} alt="icon" />
                                       <h6>{language.name}</h6>
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
                        
                    }
                </div>
                </div>
            </div>

        </div>
    );
};

export default Resume;