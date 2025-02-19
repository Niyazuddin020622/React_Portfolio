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

            {/* Modal for showing full image */}
            {selectedCert && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative flex flex-col items-center">
                        <button 
                            className="absolute top-2 right-3 text-red-600 text-3xl font-bold" 
                            onClick={() => setSelectedCert(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedCert.title}</h2>
                        <img src={selectedCert.image} alt={selectedCert.title} className="w-auto max-h-96 rounded-lg" />
                        <p className="text-gray-600 text-sm mt-2">{selectedCert.platform}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
