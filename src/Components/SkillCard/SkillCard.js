import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SkillCard.css';

const SkillCard = (props) => {
    const skill = props.skill;
    return (
            <div className="col-6">
                <div className="skill_card d-flex">
                    <FontAwesomeIcon className='skill_card_icon' icon={skill.icon} /> 
                    <h5 className="skill_card_title">{skill.title} </h5>
                </div>
                <div className="skill_card_body">
                    {skill.about}
                </div>
                        
            </div>
    );
};

export default SkillCard;