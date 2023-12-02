import React from 'react';
import { Bars, Vortex } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center justify-items-center lg:mt-44 mt-14'>
            <div>
                <Bars
                    height="80"
                    width="80"
                    color="#810CA8"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loader;