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
    { id: 1, title: "C Sharp", platform: "Microsoft Foundational", image: Csharp },
    { id: 2, title: "Web Application", platform: "CodeSoft", image: CodeSoft },
    { id: 3, title: "CCNA", platform: "Cisco", image: CCNA },
    { id: 4, title: "Java Language Features", platform: "Infosys", image: JavaLanguages },
    { id: 5, title: "Angular", platform: "Infosys", image: Angular },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id='certifications' className='py-12 bg-gray-100 relative'>
            <h1 className='text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-8'>Certifications</h1>
            <div className='max-w-6xl mx-auto px-6'>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={40}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="mySwiper pb-20"
                >
                    {certifications.map((cert) => (
                        <SwiperSlide key={cert.id}>
                            <div 
                                className='border border-gray-300 shadow-lg rounded-xl flex flex-col p-6 items-center bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl'
                                onClick={() => setSelectedCert(cert)}
                            >
                                <img src={cert.image} alt={cert.title} className="w-28 h-28 mb-4 rounded-lg object-contain" />
                                <h3 className='font-semibold text-red-600 text-xl'>{cert.title}</h3>
                                <p className='text-sm mt-1 text-gray-600'>{cert.platform}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal for showing full image */}
            {selectedCert && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative flex flex-col items-center">
                        <button 
                            className="absolute top-3 right-4 text-red-600 text-4xl font-bold transition duration-200 hover:scale-110" 
                            onClick={() => setSelectedCert(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedCert.title}</h2>
                        <img src={selectedCert.image} alt={selectedCert.title} className="w-auto max-h-96 rounded-lg shadow-md" />
                        <p className="text-gray-600 text-lg mt-3">{selectedCert.platform}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;