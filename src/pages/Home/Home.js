import React from 'react';
import { FaDownload, FaOtter, FaPhoneAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './Home.css';

// import bg from '../../assets/bg.png'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import Footer from '../Footer/Footer';
import profileImg from '../../assets/my-bg2.png'

const Home = () => {
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
                <div>
                    {/* <div className='flex justify-center mt-7 text-white'>
                <FaHome className='w-8 h-8 hover:text-violet-500'></FaHome>
            </div> */}
                    <div className='lg:mt-28 mt-7 lg:ml-12 ml-3 lg:mr-24 mr-3 lg:hidden block'>
                        <div>
                            <img className='w-96 ml-10' src={profileImg} alt="" />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='lg:mt-40 mt-10 lg:ml-14 ml-12 '>
                            <h1 className='lg:ml-0 ml-12 text-3xl font-semibold text-white '>Hi, I'm <span className=''>SHAFAYET</span>  <br /> </h1>
                            <div className='mt-5 lg:ml-0 ml-3 '>
                                <div className='typewrite'>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Web Developer',
                                                'Front End Developer', 'Back End Developer', 'Full Stack Developer', 'MERN Stack Developer', 'React.js Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }} />
                                </div>
                            </div>
                            <div className='lg:mt-7 mt-3 lg:mb-0 mb-10 lg:ml-0 ml-5 flex '>
                                <div>
                                    <Link to='/resume'>
                                        <button className='h1 btn '><FaDownload className='text-white mr-2 lg:block hidden'></FaDownload> Resume</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/contact' >
                                        <button className='h1 btn'><FaPhoneAlt className='text-white mr-2 lg:block hidden'></FaPhoneAlt> Contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='lg:mt-28 mt-0 lg:ml-32 ml-0 lg:mr-10 mr-0 lg:block hidden'>
                            <div>
                                <img className='w-96' src={profileImg} alt="" />
                            </div>
                        </div>

                    </div>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default Home;