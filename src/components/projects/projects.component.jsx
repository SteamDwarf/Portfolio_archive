import './projects.style.scss';
import Carousel from "../carousel/carousel.component";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/context.context';
import ProjectsItem from './__item/projects__item.component';

const Projects = () => {
    const {projects} = useContext(AppContext);
    
    /* const getImage = (project) => {
        return project && project?.images ? `${publicURL}${project.images[0]}` : ''
    }
 */
    return (
        <section id="projects" className="app__block projects">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__text">Some of my projects: </p>
            {/* <ProjectsItem project={projects[0]}/> */}
            <Carousel className="w-full h-4/5">
                <ProjectsItem project={projects[0]}/>
                <ProjectsItem project={projects[1]}/>
            </Carousel>
        </section>
    );
}

export default Projects;