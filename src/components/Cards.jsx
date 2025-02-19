import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Cards = ({ item }) => {
    return (
        <div className='bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-sm transform transition-all duration-300 hover:scale-105'>
            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
            <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900'>{item.title}</h3>
                <p className='text-gray-600 text-sm mt-2'>{item.desc}</p>
                <div className='mt-4'>
                    <a href={item.github} target='_blank' rel='noopener noreferrer'
                        className='flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition'>
                        <FaGithub size={18} className='mr-2' />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards
