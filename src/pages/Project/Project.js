import React, { useEffect } from 'react';
import './Project.css';
import ProjectChild from '../ProjectChild/ProjectChild';
import 'aos/dist/aos.css';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import ProjectChildModal from '../ProjectChildModal/ProjectChildModal';
import Footer from '../Footer/Footer';

const Project = () => {
    const { data: projectsInfo = [], isLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await fetch(`https://portfolio-server-virid-one.vercel.app/projects`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    /* useEffect(() => {
        Aos.init({
            duration: 1200,

        })
        Aos.refresh();
    }, []) */
    /* const projectsInfo = [
        {
            id: "1",
            projectName: "Phone Garage",
            liveSite: "https://phone-garage-client.web.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/phone-garage",
            serverGit: "https://github.com/Shafayet-Hossain23/Phone-Garage-Server",
            img: phoneGarage1,
        },
        {
            id: "2",
            projectName: "FooDies",
            liveSite: "https://foodies-client-5b86a.web.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/FooDies",
            serverGit: "https://github.com/Shafayet-Hossain23/Foodies-server",
            img: foodies1,
        },
        {
            id: "3",
            projectName: "Scan_f Academy",
            liveSite: "https://learning-platform-client-c5cea.web.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/Scan_f-Academy023",
            serverGit: "https://github.com/Shafayet-Hossain23/Scanf_academy-server",
            img: scanf1,
        },
        {
            id: "4",
            projectName: "Doctor's Portal",
            liveSite: "https://doctors-portal-client-ca22a.web.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/dentist-doctors-portal",
            serverGit: "https://github.com/Shafayet-Hossain23/Doctors-Portal-server",
            img: portal1,
        },
        {
            id: "6",
            projectName: "Quiz Store",
            liveSite: "https://quiz-store-1902023.netlify.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/quizStore",
            serverGit: "",
            img: quiz1,
        },
        {
            id: "7",
            projectName: "Strength-Center",
            liveSite: "https://strength-center-023.netlify.app",
            ClientGit: "https://github.com/Shafayet-Hossain23/strength-center",
            serverGit: "",
            img: strength1,
        },
        {
            id: "8",
            projectName: "Speed-Monster",
            liveSite: "https://speed-monster-1902023.netlify.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/Speed-Monster",
            serverGit: "",
            img: speed1,
        },
        {
            id: "9",
            projectName: "News-Portal",
            liveSite: "https://news-feed-023.netlify.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/News-Portal",
            serverGit: "",
            img: news1,
        },
        {
            id: "10",
            projectName: "Select-Five",
            liveSite: "https://pick-top-five-01.netlify.app/",
            ClientGit: "https://github.com/Shafayet-Hossain23/select-best-five",
            serverGit: "",
            img: select1,
        },
    ] */
    return (
        <div>
            {
                projectsInfo && <>
                    <div className='mt-9'>
                        <div className='text-center'>
                            <div className='titleStyle'>
                                <h1>My Some <span className=''>Projects</span></h1>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 mt-5 lg:mx-2 mx-0 lg:ml-5 ml-5 mb-10'>
                            {
                                projectsInfo.map(project => <ProjectChild
                                    key={project.project_id}
                                    project={project}
                                >

                                </ProjectChild>)
                            }
                        </div>
                        <Footer></Footer>
                    </div>

                </>
            }

        </div>
    );
};

export default Project;