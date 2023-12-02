import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-24 footerStyle'>

            <div className='flex justify-center gap-24' >
                <div className=''>
                    <a href="https://www.linkedin.com/in/md-shafayet-hossain-11bb0120b/" target="_blank">
                        <FaLinkedin className='text-white'></FaLinkedin>
                    </a>
                </div>
                <div className=''>
                    <a href="https://www.facebook.com/profile.php?id=100009450040721" target="_blank">
                        <FaFacebook className='text-white'></FaFacebook>
                    </a>
                </div>
                <div className=''>
                    <a href="https://github.com/Shafayet-Hossain23" target="_blank">
                        <FaGithub className='text-white'></FaGithub>
                    </a>
                </div>
            </div>
            <div className="footerName">
                © 2022 - All right reserved by Shafayet Hossain
            </div>
        </div>
    );
};

export default Footer;