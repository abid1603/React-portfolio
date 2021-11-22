import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import {faLaptopCode,faPalette,faServer,faFileCode } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const skills =[
    {
        icon: faLaptopCode,
        title: 'Frontend Development' ,
        about: ' i can built beautiful User Interface using HTML,CSE and React JS.'
    },
    {
        icon: faServer,
        title: 'Backend Development' ,
        about: ' i can Handle database,server,API using Node JS,Express Js and MongoDB.'
    },
    {
        icon: faPalette,
        title: 'Graphics Design' ,
        about: ' i can Design Logo,Business Card,Flayer, Vector,Banner and So Many Things On.'
    },
    {
        icon: faFileCode,
        title: 'Full Stack Development' ,
        about: ' i can built Full Development app using React, Express Js,Node JS and MongoDb.'
    }
]

const About = () => {
    return (
        <div className='about'>
            <div className="about_info my-2">
            <p>Hi, My name is Abidur Rahman Abid, and I’m a recent computer science graduate from Daffodil International University.
                 I’ve been working on UI Design and Front End Devlopment,Graphics Design and Loves Problem Solving.
                 I have Completed So many projects on Web Development Since 1 Year and also Working on Graphics Design Since Last 3 Years.
                Also i have some Achievement on Problem Solving.I enjoy taking complex and beautiful Interface designs.
            </p>
            </div>
            <div className="container about_container my-2">
                <h4 className='about_heading'>What I offer</h4>
                <div className="row">
                    {
                        skills.map( skill => <SkillCard skill={skill}></SkillCard>)
                    }
                </div>
            </div>

        </div>
    );

};

export default About;