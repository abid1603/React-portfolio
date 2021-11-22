import React from 'react';
import './Sidbar.css';
import img from '../Photos/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faMapMarkerAlt,faEnvelope,faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import facebook from '../Icons/facebook.svg';
import github from '../Icons/github.svg';
import linkdin from '../Icons/linkedin.svg';
import CV from '../CV/nobel.png';

const Sidbar = () => {
    const handelEmailMe = () =>{
        Window.open("mailto:abidkhan1603@gmail.com");
    }
    return (
        <div className="sidbar p-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img className='rounded-circle'
                     src={img} alt="abid photo"/>
                </div>
            </div>
            <div className="row">
                        <div className="col-12">
                            <h4 className='text-center my-3'>Abidur Rahman Abid</h4>
                        </div>
            </div>
            <div className="row">
                <div className="col-12 background my-2 py-1 text-center">
                    <span>Web Developer</span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 background2 my-2 py-1 text-center">
                    <a href={CV} download='CV.png' className='link'>
                      <FontAwesomeIcon icon={faDownload} /><span className='mx-2'>Download Resume</span>
                    </a>
                </div>
            </div>
            <div className="row icons my-2">
                <div className="col-12  text-center d-flex justify-content-around p-1">
                    <a href=""><img className='socialicon' src={github} alt="github icon" /></a>
                    <a href=""><img className='socialicon' src={facebook} alt="github icon" /></a>
                    <a href=""><img className='socialicon' src={linkdin} alt="github icon" /></a>

                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center contect">
                        <div className="contect-info py-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> <span>Dhaka,Bangladesh</span>
                        </div>
                        <div className="contect-info py-2">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span>Abidkhan1603@gmail.com</span>
                        </div>
                        <div className="contect-info py-2">
                        <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> <span>01780146581, 01637674086</span>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-3 py-3 text-center d-grid">
                    <button onClick={handelEmailMe} className='emailbtn'>Email Me</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12  text-center d-grid">
                     <button className='emailbtn'>Dark UI</button>
                </div>
            </div>
        </div>
    );
};

export default Sidbar;