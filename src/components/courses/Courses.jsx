import React, { useEffect, useState } from 'react'
import Course from './Course';

const Courses = ({ getSElectedCourse }) => {

    //states
    const [courses, setCourses] = useState([]);

    //Fetch data and set to state
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <section className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                courses.map(course => <Course key={course.id}
                    course={course}
                    getSElectedCourse={getSElectedCourse} />)
            }
        </section>
    )
}

export default Courses