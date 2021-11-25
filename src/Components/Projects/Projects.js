import React, { useState } from 'react';
import './Projects.css';
import data_projects from '../ProjectsData/ProjectsData';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) =>{
       const newarry = data_projects.filter(project => project.category.includes(name))
      //console.log(newarry);
       setProjects(newarry)
    }
    return (
        <div className="container projects pt-3">
            <div className="projects_navbar d-flex">
                <div className='navitem' onClick={()=>setProjects(data_projects)}>All</div>
                <div className='navitem' onClick={()=>handleFilterCategory('React')}>React</div>
                <div className='navitem' onClick={()=>handleFilterCategory("Javascript")}>JavaScript</div>
                <div className='navitem' onClick={()=>handleFilterCategory('Bootstrap')}>Bootstrap</div>
            </div>
            <div className="row">
                {
                    data_projects.map(project => <ProjectCard key={project.name} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;