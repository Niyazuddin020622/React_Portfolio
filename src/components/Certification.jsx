import React, { useState } from 'react';
import Csharp from '../assets/certificate/csharp.png';
import CodeSoft from '../assets/certificate/codesoft.png';
import CCNA from '../assets/certificate/ccna.png';
import JavaLanguages from '../assets/certificate/java.png';
import Angular from '../assets/certificate/angular.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const certifications = [
    { id: 1, title: "C sharp", platform: "Microsoft Foundational", image: Csharp },
    { id: 2, title: "Web Application", platform: "CodeSoft", image: CodeSoft },
    { id: 3, title: "CCNA", platform: "Cisco", image: CCNA },
    { id: 4, title: "Java Language Features", platform: "Infosys", image: JavaLanguages },
    { id: 5, title: "Angular", platform: "Infosys", image: Angular },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id='certifications' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-gray-900'>Certifications</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
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
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {certifications.map((cert) => (
                        <SwiperSlide key={cert.id}>
                            <div 
                                className='border border-gray-400 shadow-md rounded-lg flex flex-col p-4 items-center bg-white cursor-pointer'
                                onClick={() => setSelectedCert(cert)}
                            >
                                <img src={cert.image} alt={cert.title} className="w-24 h-24 mb-4 rounded-lg" />
                                <h3 className='font-semibold text-red-500 text-lg'>{cert.title}</h3>
                                <p className='text-sm mt-1 text-gray-600'>{cert.platform}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Certifications;
