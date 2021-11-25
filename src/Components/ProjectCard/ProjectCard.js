import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
    const {name,image,deployed_url,github_url,category} = props.project
    return (
        <div className='projectCard col-md-6 col-lg-4 mb-1'>
            <div className="projectCard_wraper">
                <a href={deployed_url} target='_blank'>
                    <img className='project_image' src={image} alt="projects image" />
                </a>
                <div className="projectCard_title mt-2 d-flex">
                    <a href={github_url} target='_blank'>
                        <FontAwesomeIcon className="projectCard_icon" icon={faGithubSquare} />
                    </a>
                    <span className='project_name'>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;