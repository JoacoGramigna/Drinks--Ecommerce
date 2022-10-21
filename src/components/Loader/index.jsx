import React from 'react';

import './styles.css';

import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='loaderSpin'>
            <TailSpin
                height="80"
                width="80"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader;