import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Components/Loader';
import Footer from '../Footer/Footer';
import './Education.css'

const Education = () => {
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
                            <h1>{education}</h1>
                        </div>
                        <div className='educationContainer'>
                            <div className="educationBox bdu">
                                <span></span>
                                <div className="educationContent">
                                    <h2 className=''>Bangabandhu Sheikh Mujibur Rahman Digital University </h2>
                                    <p>
                                        <h1 className='my-2'>2020-present</h1>
                                        <h1>Department of ICT in Education</h1>
                                        <h1 className='my-2'>B.Sc. in ICTE</h1>
                                    </p>
                                    <a href="https://bdu.ac.bd/" target='_blank'>Read More</a>
                                </div>
                            </div>
                            <div className="educationBox ngdc">
                                <span></span>
                                <div className="educationContent">
                                    <h2 className=''>New Government Degree College, Rajshahi </h2> <br />
                                    <p>
                                        <h1 className='my-2'>2017-2019</h1>
                                        <h1>Department of Science</h1>
                                        <h1 className='my-2'>Higher Secondary</h1>
                                    </p>
                                    <a href="https://ngdc.ac.bd/" target='_blank'>Read More</a>
                                </div>
                            </div>
                            <div className="educationBox sm">
                                <span></span>
                                <div className="educationContent">
                                    <h2 className=''>Mohadevpur S.M <br />  High School </h2>
                                    <p>
                                        <h1 className='my-2'>2011-2017</h1>
                                        <h1 className='my-2'> Secondary</h1>
                                    </p>
                                    <a href="https://en.wikipedia.org/wiki/Mohadevpur_Sarba_Mongala_(Pilot)_High_School" target='_blank'>Read More</a>
                                </div>
                            </div>
                            <div className="educationBox mirzapore">
                                <span></span>
                                <div className="educationContent">
                                    <h2 className=''>Govt. Mirzapore <br /> Primary School </h2>
                                    <p>
                                        <h1 className='my-2'>2007-2010</h1>
                                        <h1 className='my-2'> Pre-primary & Primary</h1>
                                    </p>
                                    <a href="https://www.facebook.com/profile.php?id=100063969336479" target='_blank'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default Education;