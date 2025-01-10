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
      desc: 'A fully responsive e-commerce platform with features like product listings, a shopping cart, and payment integration, designed to enhance the online shopping experience.',
      image: Ecommerce,
      github: "https://github.com/Niyazuddin020622/Ecommerce-website-.git"
    },
    {
      title: 'Make My Trip',
      desc: 'A travel booking website offering features like flight search, hotel reservations, and package deals, providing a seamless experience for travel enthusiasts.',
      image: travel,
      github: "https://github.com/Niyazuddin020622/Traveling-Websites-.git"
    },
    {
      title: 'Movie Maker',
      desc: 'A dynamic web application for creating and managing movie collections, with features like user ratings, reviews, and a responsive design.',
      image: movie,
      github: "https://github.com/Niyazuddin020622/Self-React-Course.git"
    },
    {
      title: 'Weather App',
      desc: 'A sleek and modern weather application that provides real-time weather updates, forecasts, and location-based weather details.',
      image: Weather,
      github: "https://github.com/Niyazuddin020622/Self-React-Course.git"
    },
    {
      title: 'Cyber Mart E-commerce',
      desc: 'An advanced e-commerce platform with a focus on cybersecurity products, offering a secure shopping experience with robust encryption.',
      image: cybermart,
      github: "#"
    },
    {
      title: 'Food Order',
      desc: 'An intuitive food ordering platform with features like menu browsing, order customization, and online payment, ideal for restaurants and cafes.',
      image: foodorder,
      github: "https://github.com/Niyazuddin020622/PHP-Project.git"
    },
];


  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
