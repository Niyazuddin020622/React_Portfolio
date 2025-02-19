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
        <div id='certifications' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-gray-900'>Certifications</h1>
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
                    pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true }}
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
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
                        <button 
                            className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl"
                            onClick={() => setSelectedCert(null)}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">{selectedCert.title}</h2>
                        <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-lg" />
                        <p className="text-center text-gray-600 mt-2">{selectedCert.platform}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certifications;
