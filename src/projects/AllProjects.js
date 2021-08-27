import React from 'react';
import NavSec from '../home/NavSec';
import '../projects/projects.scss';
import './ProjectsHeader';
import ProjectsHeader from './ProjectsHeader';
import {
    Container
} from 'reactstrap'

function AllProjects() {
    return (
       <div className="projects">
        <div className="projects-navbar">
            <NavSec className="dark"/>
        </div>
        <Container> 
            <ProjectsHeader />
        </Container>
       </div>
    )
}

export default AllProjects
