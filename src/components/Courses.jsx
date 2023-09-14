import React, { useEffect, useState } from 'react'

const Courses = () => {

    //states
    const [courses, setCourses] = useState([]);



    //Fetch data and set to state
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    console.log(courses);


    return (
        <div>Courses</div>
    )
}

export default Courses