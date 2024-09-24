import React from 'react';
import { shoe8 } from '../../assets/images';
import Button from '../Components/Button';

function SuperQuality(props) {
    return (
        <section
            id='about-us'
            className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red'> Super</span> <br />
                    <span className='text-coral-red'>Quality </span>
                    Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you
                    with unmatching quality, innovation and touch of elegance.
                </p>
                <p className='mt-6 lg:max-w-lg info-text'>
                    Our dedication to detail and excellence ensures your satisfaction.
                </p>
                <div className='mt-11'>

                    <Button label="View Details" />
                </div>
            </div>

            <div className='flex flex-1 justify-center items-cente'>
                <img 
                    src={shoe8} 
                    alt="shoe image" 
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    );
}

export default SuperQuality;