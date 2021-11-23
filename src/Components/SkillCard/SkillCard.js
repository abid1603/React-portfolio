import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillCard.css';

const SkillCard = (props) => {
    const skill = props.skill;
    return (
            <div className="col-sm-12 col-lg-6 p-2">
                <div className="skill_card">
                <div className="d-flex align-items-center p-2">
                    <FontAwesomeIcon className='skill_card_icon' icon={skill.icon} /> 
                    <h5 className="skill_card_title">{skill.title} </h5>
                </div>
                <div className="skill_card_body p-2">
                    {skill.about}
                </div>
                </div>        
            </div>
    );
};

export default SkillCard;