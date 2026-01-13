import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../assets/image/1.jpg'
import image2 from '../../assets/image/2.jpg'
import image3 from '../../assets/image/3.jpg'
import image4 from '../../assets/image/4.jpg'
import { FaCirclePlay } from 'react-icons/fa6';

const HeroSection = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='relative'>
                <img className='w-full h-[500px] xl:h-[700px] object-cover' src={image1} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-black bg-opacity-30 text-white'>
                    <h2 className='text-4xl font-bold mb-4'>IMX 3D Experience</h2>
                    <p className='mb-6'>January 29, 2018</p>
                    <div className='flex items-center justify-between gap-4'>
                        <button className='bg-red-500 px-6 py-2 font-semibold rounded'>Book Now</button>
                        <FaCirclePlay className='text-red-500 text-4xl cursor-pointer' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='w-full h-[500px] xl:h-[700px] object-cover' src={image2} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-black bg-opacity-30 text-white'>
                    <h2 className='text-4xl font-bold mb-4'>IMX 3D Experience</h2>
                    <p className='mb-6'>January 29, 2018</p>
                    <div className='flex items-center gap-4'>
                        <button className='bg-red-500 px-6 py-2 font-semibold rounded'>Book Now</button>
                        <FaCirclePlay className='text-red-500 text-4xl cursor-pointer' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='w-full h-[500px] xl:h-[700px] object-cover' src={image3} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-black bg-opacity-30 text-white'>
                    <h2 className='text-4xl font-bold mb-4'>IMX 3D Experience</h2>
                    <p className='mb-6'>January 29, 2018</p>
                    <div className='flex items-center gap-4'>
                        <button className='bg-red-500 px-6 py-2 font-semibold rounded'>Book Now</button>
                        <FaCirclePlay className='text-red-500 text-4xl cursor-pointer' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='w-full h-[500px] xl:h-[700px] object-cover' src={image4} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-black bg-opacity-30 text-white'>
                    <h2 className='text-4xl font-bold mb-4'>IMX 3D Experience</h2>
                    <p className='mb-6'>January 29, 2018</p>
                    <div className='flex items-center gap-4'>
                        <button className='bg-red-500 px-6 py-2 font-semibold rounded'>Book Now</button>
                        <FaCirclePlay className='text-red-500 text-4xl cursor-pointer' />
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default HeroSection;
