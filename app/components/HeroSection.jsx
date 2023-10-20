import React from 'react'
import ImageAvata from 'next/image'
import Main from './Main'

const HeroSection = (props) => {
  return (
    <section>
       <div className='grid grid-cols-1 lg:grid-cols-12'>
           <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    {props.text}
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6s'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur id adipisci magnam.
                </p>
            </div>

            <div>
                <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                <button className='px-6 py-3 rounded-full bg-transparent text-white bg-white hover:bg-slate-800 border border-white mt-3'>Dowload CV</button>
            </div>

            <Main/>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <ImageAvata
                        src='/images/avatar.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2'                 width={300}
                        height={300}
                    />
                </div>
            </div>
       </div>
    </section>
  )
}

export default HeroSection