import React from 'react';
import './Resume.css';
import resume from '../../assets/shafayet-resume.pdf'
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import Footer from '../Footer/Footer';

const Resume = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ["allData"],
        queryFn: async () => {
            const res = await fetch('https://portfolio-server-virid-one.vercel.app/allData')
            const data = await res.json()
            return data[0]
        }
    })
    // console.log(data)
    const { courses, education, contact, homeBgImg, resume } = data
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            {
                data &&
                <div className='mt-9'>
                    <div className='text-center'>
                        <div className='titleStyle'>
                            <h1>{resume}</h1>
                        </div>
                    </div>
                    <div className='resumeContainer'>
                        <div className="resumeBox w-1/2">
                            <span></span>
                            <div className="resumeContent">
                                <h2>WHO I AM?</h2>
                                <p className=''>I am studying under the program of B.Sc. in Information and Communication Technology in Education.  My program focused on mathematics, web design, database administration, coding, Instructional Technology, Teaching Methodologies, Digital Content Design & Development, Innovation & Entrepreneurship and the tools needed for changing the traditional education to modern digital education. <br /> <br />
                                    When I was in 1st year, I feel much interest in web design and development sector. So, without any delay I started learning some tiny things about web-development. I enrolled a course named Programming Hero with Jhankar Mahbub with full effort. I have successfully completed the course by gaining a reward from the course administration and introduce myself as a junior web-developer. I acquire a strong knowledge and experience in front-end design such in html, css and deep understanding of JavaScript, NodeJS, ReactJS, and MongoDB. I also learn framework like bootstrap, tailwind, daisyUi, flowbite and many more for front-end design. I enjoy very much when I run backend operation for development website. <br /> <br />
                                    I also have a working knowledge of a variety of scripting and structured programming languages. I keep up with all the most recent developments and trends in this field, and I can implement on this knowledge as necessary. I have a pleasant, outgoing attitude and the capacity to operate both individually and in a group.
                                </p>
                                <a href="https://drive.google.com/file/d/1TfSdfTOnyUrqp1fr4k9nfJcMYRGFHOzO/view" target='_blank'>Download my resume</a>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default Resume;