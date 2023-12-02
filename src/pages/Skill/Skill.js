import React from 'react';
import skill from '../../assets/skill.png';
import ProgressBar from 'react-animated-progress-bar';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import html from '../../assets/technologies/html.png';
import css from '../../assets/technologies/css.png';
import bootstrap from '../../assets/technologies/bootstrap.png';
import tailwind from '../../assets/technologies/tailwind.png';
import javaScript from '../../assets/technologies/js-1.png';
import react from '../../assets/technologies/reactJs.png';
import daisy from '../../assets/technologies/daisyui.png';
import node from '../../assets/technologies/nodeJs.png';
import express from '../../assets/technologies/expressJs.png';
import mongodb from '../../assets/technologies/mongodb.png';
import firebase from '../../assets/technologies/firebase.png';
import gitHub from '../../assets/technologies/git-1.png';
import netlify from '../../assets/technologies/netlify.png'
import SkillChild from '../SkillChild/SkillChild';
import './Skill.css'
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import Footer from '../Footer/Footer';



const Skill = () => {

    const myRef = document.querySelector('.scrollable-div')
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
    const technologies = [
        {
            id: 1,
            name: "HTML",
            img: html
        },
        {
            id: 2,
            name: "CSS",
            img: css
        },
        {
            id: 3,
            name: "Bootstrap",
            img: bootstrap
        },
        {
            id: 4,
            name: "Tailwind",
            img: tailwind
        },
        {
            id: 5,
            name: "Java Script",
            img: javaScript,

        },
        {
            id: 6,
            name: "React Js",
            img: react
        },
        {
            id: 7,
            name: "daisyUI",
            img: daisy
        },
        {
            id: 8,
            name: "Node.Js",
            img: node
        },
        {
            id: 9,
            name: "Express.Js",
            img: express
        },
        {
            id: 10,
            name: "MongoDB",
            img: mongodb
        },
        {
            id: 11,
            name: "Firebase",
            img: firebase
        },
        // {
        //     id: 12,
        //     name: "Git Hub",
        //     img: gitHub,
        //     bg: "bg-white"

        // },
        {
            id: 13,
            name: "Netlify",
            img: netlify
        },
    ]

    return (
        <div>
            {
                data &&
                <div className='mt-9'>
                    <div>
                        <div className='text-center'>
                            <div className='titleStyle'>
                                <h1>{courses}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='courseContainer flex lg:mb-0 mb-10 lg:-ml-7 ml-0 -mt-7'>
                        <div className="courseBox w-1/2">
                            <span></span>
                            <div className="courseContent">
                                <h2>Programming Hero</h2>
                                <p>Complete Web Development Course.
                                    Learn everything it takes to get a job as a junior web developer from scratch.</p>
                                <a href="https://web.programming-hero.com/home/" target='_blank'>Read More</a>
                            </div>
                        </div>
                        <div className="courseBox">
                            <span></span>
                            <div className="courseContent">
                                <h2>Webcoder IT</h2>
                                <p className=''>
                                    Learn digital marketing strategy through social media, Google, Pinterest etc to promotes the bands and with potential customers</p>
                                <a href="https://webcoder-it.com/" target='_blank'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:ml-auto ml-40 w-2/3 grid lg:grid-cols-5 grid-cols-1 mx-auto'>
                        <div>
                            <ProgressBar
                                width="250px"
                                height="10px"
                                fontColor="white"
                                trackWidth="14"
                                percentage="85"
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="transparent"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: 'purple',
                                    poor: 'red',
                                }}
                                scrollArea={myRef}
                            />
                            <h1 className='text-white font-bold text-xl ml-3'>HTML/CSS</h1>
                        </div>

                        <div>
                            <ProgressBar
                                width="250px"
                                height="10px"
                                fontColor="white"
                                trackWidth="14"
                                percentage="78"
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="transparent"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: 'yellow',
                                    poor: 'red',
                                }}
                                scrollArea={myRef}
                            />
                            <h1 className='text-white font-bold text-xl ml-3'>Java Script</h1>
                        </div>
                        <div>
                            <ProgressBar
                                width="250px"
                                height="10px"
                                fontColor="white"
                                trackWidth="14"
                                percentage="70"
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="transparent"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: '#FF7000',
                                    poor: 'red',
                                }}
                                scrollArea={myRef}
                            />
                            <h1 className='text-white font-bold text-xl ml-6'>React Js</h1>
                        </div>
                        <div>
                            <ProgressBar
                                width="250px"
                                height="10px"
                                fontColor="white"
                                trackWidth="14"
                                percentage="75"
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="transparent"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: '#FF06B7',
                                    poor: 'red',
                                }}
                                scrollArea={myRef}
                            />
                            <h1 className='text-white font-bold text-xl ml-6'>Node Js</h1>
                        </div>
                        <div>
                            <ProgressBar
                                width="250px"
                                height="10px"
                                fontColor="white"
                                trackWidth="14"
                                percentage="72"
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="transparent"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: '#3CCF4E',
                                    poor: 'red',
                                }}
                                scrollArea={myRef}
                            />
                            <h1 className='text-white font-bold text-xl ml-4'>Database</h1>
                        </div>

                    </div>

                    <div className='mt-24 text-center mb-14'>
                        <div className='titleStyle '>
                            <h1>Technologies I know</h1>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-14  mb-14'>
                        {
                            technologies.map(technology => <SkillChild
                                key={technology.id}
                                technology={technology}
                            ></SkillChild>)
                        }
                    </div>
                    <Footer></Footer>
                </div >
            }
        </div>
    );
};

export default Skill;