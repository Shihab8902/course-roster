import React, { useEffect, useState } from 'react'
import Course from './Course';

const Courses = () => {

    //states
    const [courses, setCourses] = useState([]);



    //Fetch data and set to state
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);



    return (
        <section className='flex-1'>
            {
                courses.map(course => <Course key={course.id} course={course} />)
            }
        </section>
    )
}

export default Courses