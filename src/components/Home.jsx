import React from 'react';
import myImage from '../assets/myImage.png';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed'; // Corrected import

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 md:pt-16'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full md:w-1/2 text-center md:text-left md:mr-8 mt-16 md:mt-0'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>Hi, I'm</h1>

          <h2 className='text-2xl sm:text-7xl font-bold text-white capitalize'>sandesh subedi</h2>

          <div className='text-white py-5 text-2xl'>
            <span className='mr-2'>a</span>
            <ReactTyped
              strings={["Software developer", "Tech enthusiast"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className='font-bold glow-effect'
            />
          </div>
          <h2 className='text-gray-400 py-4'>
            A dedicated individual with a strong foundation in computer science, mathematics, and hands-on experience across diverse technologies like Java, React, .NET, and machine learning.
          </h2>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              offset={-80}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdArrowRightAlt size={20} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div className='mt-8 md:mt-0 md:w-1/2 md:ml-10'>
          <img
            src={myImage}
            alt='my profile'
            className='w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500 shadow-lg'
            style={{
              boxShadow: '0 0 20px 5px rgba(0, 255, 255, 0.6)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
