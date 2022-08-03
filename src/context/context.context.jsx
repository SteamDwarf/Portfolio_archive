import { createContext, useEffect, useState } from "react";

const defaultState = {
    publicURL: '',
    projects: []
}

export const AppContext = createContext(defaultState);

export const AppProvider = ({children}) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        fetch(`${process.env.PUBLIC_URL}/projects.json`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setProjects(data.projects))
        .catch(error => console.error(error));
    }

    const value = {
        publicURL: process.env.NODE_ENV === 'development' 
                    ? 'http://localhost:3000/' 
                    : process.env.PUBLIC_URL,
        projects
    }

    useEffect(fetchProjects, []);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}