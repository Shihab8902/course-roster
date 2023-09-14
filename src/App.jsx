import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layouts/Header'
import Courses from './components/courses/Courses'
import Status from './components/status/Status'


const App = () => {

  const [selectedCourse, setSelectedCourse] = useState([]);

  //Status states
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [claimCredit, setClaimCredit] = useState(0);
  const [price, setPrice] = useState(0);



  const getSElectedCourse = (course) => {
    if (selectedCourse.includes(course)) {
      toast('The course is already selected!!');
    } else {
      const newRemainingCredit = remainingCredit - course.credit_hour;
      if (newRemainingCredit >= 0) {
        setSelectedCourse([...selectedCourse, course]);
        setRemainingCredit(newRemainingCredit);
        setClaimCredit(claimCredit + course.credit_hour);
        setPrice(price + course.price);
      } else {
        toast("Maximum credit limit exceed!!");
      }

    }


  }



  return <>
    <header className='container mx-auto'>
      <Header />
    </header>

    <main className='container mx-auto flex flex-col-reverse lg:flex-row px-4 justify-between gap-6'>
      <Courses getSElectedCourse={getSElectedCourse} />
      <Status
        remainingCredit={remainingCredit}
        claimCredit={claimCredit}
        price={price}
        selectedCourse={selectedCourse} />
    </main>

    <ToastContainer />

  </>
}

export default App