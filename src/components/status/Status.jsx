import React, { useState } from 'react'


const Status = ({ remainingCredit, claimCredit, price, selectedCourse }) => {


    return <section className=' w-full lg:w-[312px] bg-white p-6 h-max rounded-lg'>
        <div className='border-b-2 pb-3'>
            <h3 className='text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining {remainingCredit} hr</h3>
        </div>

        <div className='border-b-2 py-3'>
            <h4 className='text-xl font-bold mb-5 mt-2 '>Course Name</h4>
            {
                selectedCourse.map(course => <li className=' list-decimal text-[#1C1B1B99] mb-3' key={course.id}>{course.title}</li>)
            }

        </div>

        <div className='py-4 border-b-2'>
            <p className='font-medium'>Total Credit Hour : {claimCredit}</p>
        </div>

        <div className='pt-4'>
            <p className='text-[#1C1B1BCC] font-semibold'>Total Price : {price} USD</p>
        </div>

    </section >
}

export default Status