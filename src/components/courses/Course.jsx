import React from 'react'
import Icons from '../SVG/Icons';

const Course = ({ course }) => {
    const { cover_img, title, description, price, credit_hour } = course;
    return <div className='p-4 bg-white rounded-xl'>
        <div>
            <img src={cover_img} alt={`cover image for ${title}`} />
        </div>

        <div>
            <h3 className='text-base font-semibold  my-4'>{title}</h3>

            <p className='text-sm text-[#1C1B1B99] '> {description} </p>

            <Icons credit_hour={credit_hour} price={price} />

            <button className="w-full py-2 bg-[#2F80ED] text-white font-semibold text-lg rounded-lg mt-7">Select</button>

        </div>

    </div>
}

export default Course