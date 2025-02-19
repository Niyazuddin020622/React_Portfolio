import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Cards = ({ item }) => {
    return (
        <div className='bg-white shadow-lg rounded-xl overflow-hidden w-[300px] sm:w-[350px] transform transition-transform hover:scale-105'>
            <img src={item.image} alt={item.title} className='w-full h-40 object-cover' />
            <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900'>{item.title}</h3>
                <p className='text-gray-600 text-sm mt-2'>{item.desc}</p>
                <div className='mt-4 flex justify-between items-center'>
                    <a href={item.github} target='_blank' rel='noopener noreferrer' className='text-white bg-gray-900 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-700 transition'>
                        <FaGithub size={18} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards
