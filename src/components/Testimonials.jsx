import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rani Ansari",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            role: "CEO, Webelite Builders"
        },
        {
            id: 2,
            name: "Suresh Kuamar Pandey",
            rating: 4,
            text: "The service was amazing and met all my expectations!",
            role: "Software Engineer"
        },
        {
            id: 3,
            name: "Meraj Ansari",
            rating: 5,
            text: "Highly recommended for anyone looking for quality work.",
            role: "Freelancer"
        },
        {
            id: 4,
            name: "Gyasuddin",
            rating: 5,
            text: "Fantastic team to work with, very professional and efficient.",
            role: "Customer"
        },
        {
            id: 6,
            name: "Anjali Sharma",
            rating: 5,
            text: "Exceptional service! Exceeded all my expectations.",
            role: "Project Manager"
        },
        {
            id: 7,
            name: "Jay Fuletra",
            rating: 4,
            text: "Great value for the money. Highly recommended.",
            role: "Entrepreneur"
        },
        {
            id: 8,
            name: "Pooja Singh",
            rating: 5,
            text: "Their team is amazing. The attention to detail was impressive.",
            role: "Digital Marketer"
        },
        {
            id: 9,
            name: "Arif Hussain",
            rating: 5,
            text: "One of the best experiences I’ve had. True professionals.",
            role: "Business Owner"
        },
        {
            id: 10,
            name: "Sujeet Sharma",
            rating: 4,
            text: "Satisfied with the quality and the team’s dedication.",
            role: "Consultant"
        },
    ];

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What our Customers Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                <div className='flex'>
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} fill={index < item.rating ? 'true' : undefined} />
                                    ))}
                                </div>
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>{item.role}</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
