import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import Footer from '../Footer/Footer';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const emailForm = e.target

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                // console.log(result.text);
                toast.success('Successfully sent!')
                emailForm.reset()

            }, (error) => {
                // console.log(error.text);
                toast.error("Sorry, Something went wrong")
            });
    };
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
                            <h1>{contact}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="background">
                            <div className="contactContainer">
                                <div className="screen">
                                    <div className="screen-header">
                                        <div className="screen-header-left">
                                            <div className="screen-header-button close"></div>
                                            <div className="screen-header-button maximize"></div>
                                            <div className="screen-header-button minimize"></div>
                                        </div>
                                        <div className="screen-header-right">
                                            <div className="screen-header-ellipsis"></div>
                                            <div className="screen-header-ellipsis"></div>
                                            <div className="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div className="screen-body">
                                        <div className="screen-body-item left">
                                            <div className="app-title">
                                                <span>CONTACT</span>

                                            </div>
                                            <div className="app-contact"> mdshafayethossain6530@gmail.com</div>
                                        </div>
                                        <div className="screen-body-item">
                                            <form ref={form} onSubmit={sendEmail} className="app-form">
                                                <div className="app-form-group">
                                                    <input name='name' className="app-form-control" placeholder="NAME" required />
                                                </div>
                                                <div className="app-form-group">
                                                    <input name='email' className="app-form-control" placeholder="EMAIL" required />
                                                </div>
                                                <div className="app-form-group">
                                                    <input name="subject" className="app-form-control" placeholder="subject" required />
                                                </div>
                                                <div className="app-form-group message">
                                                    <textarea name="message" className="app-form-control h-14" placeholder="MESSAGE" required />
                                                </div>
                                                <div className="app-form-group buttons">

                                                    <input type="submit" className="app-form-button" value="SEND" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="credits">
                                    Shafayet Hossain

                                </div>
                            </div>
                        </div>
                        <Toaster></Toaster>
                    </div>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default Contact;