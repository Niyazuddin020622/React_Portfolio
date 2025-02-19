import React from 'react'
import Ecommerce from '../assets/ecommerce.png'
import travel from '../assets/travel.png'
import movie from '../assets/movie.png'
import Weather from '../assets/weather.png'
import cybermart from '../assets/cybermart.png'
import foodorder from '../assets/foodorder.png'
import Cards from './Cards'

const Projects = () => {
    const projectJson = [
        {
            title: 'E-commerce Website',
            desc: 'A responsive e-commerce platform with product listings, cart, and payments.',
            image: Ecommerce,
            github: "https://github.com/Niyazuddin020622/Ecommerce-website-.git"
        },
        {
            title: 'Make My Trip',
            desc: 'A travel booking site with flight search and hotel reservations.',
            image: travel,
            github: "https://github.com/Niyazuddin020622/Traveling-Websites-.git"
        },
        {
            title: 'Movie Maker',
            desc: 'A web app for creating and managing movie collections.',
            image: movie,
            github: "https://github.com/Niyazuddin020622/Self-React-Course.git"
        },
        {
            title: 'Weather App',
            desc: 'A real-time weather forecast application with location-based updates.',
            image: Weather,
            github: "https://github.com/Niyazuddin020622/Self-React-Course.git"
        },
        {
            title: 'Cyber Mart E-commerce',
            desc: 'An e-commerce store focused on cybersecurity products.',
            image: cybermart,
            github: "#"
        },
        {
            title: 'Food Order',
            desc: 'A food ordering platform with online payments and order tracking.',
            image: foodorder,
            github: "https://github.com/Niyazuddin020622/PHP-Project.git"
        },
    ];

    return (
        <section id='projects' className='bg-gray-700 py-12 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>
                    My Projects
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projectJson.map((items, index) => (
                        <Cards key={index} item={items} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
