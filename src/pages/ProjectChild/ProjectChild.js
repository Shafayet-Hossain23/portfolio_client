import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectChild.css'


const ProjectChild = ({ project }) => {
    const { project_id, projectName, liveSite, ClientGit, serverGit, img } = project
    return (
        <div className=''>
            <div className="container">
                <div className="cards bg-transparent">
                    <div className="imgBx">
                        <img src={img} className="h-96 w-full" alt='' />
                    </div>
                    <div className="contentBx">
                        <h2>{projectName}</h2>
                        <div className='flex lg:ml-10 ml-9 mt-4'>
                            <div>
                                <a href={ClientGit} target="_blank">
                                    <button className='btn btn-outline btn-success'>Git Hub</button>
                                </a>
                            </div>
                            <div>
                                <a href={liveSite} target="_blank">
                                    <button className='btn btn-outline btn-warning'> Live Site</button>
                                </a>
                            </div>
                        </div>
                        <div>
                            {
                                serverGit && <Link >
                                    <button className='h1'> server-site</button>
                                </Link>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectChild;