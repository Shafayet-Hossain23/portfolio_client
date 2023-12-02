import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Education from "../pages/Education/Education";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import Resume from "../pages/Resume/Resume";
import Skill from "../pages/Skill/Skill";

const { createBrowserRouter } = require("react-router-dom");


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
        ]
    }
])