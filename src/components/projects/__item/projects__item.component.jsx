import './projects__item.style.scss';
import { useContext } from "react";
import { AppContext } from "../../../context/context.context";

const ProjectsItem = ({project}) => {
    const {publicURL} = useContext(AppContext);

    const getImage = (project, imageIndex) => {
        return project && project?.images ? `${publicURL}${project.images[imageIndex]}` : ''
    }


    return (
        <div className="projects__item">
            {/* <div className="projects__item-img-container">
                <img className="projects__item-img" src={getImage(project, 0)} alt="" />
            </div> */}
            <img className="projects__item-img" src={getImage(project, 0)} alt="" />
            <div className="projects__item-text">
                <h3 className="projects__item-title">Chatter</h3>
                <p className="projects__item-description">web chat on React with Socket.io library. In this project I learned how to raise the simple
server on Express, how to work with library Socket.io on client and server side</p>
            </div>
        </div>
    );
}

export default ProjectsItem;