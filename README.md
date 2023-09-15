# 'Course Registration' online programming courses platform

Welcome to Course Registration! This is a react project (powered by vite) created to provide a seamless experience for users to explore and purchase variety of quality programming courses.


## Table of contents
- [Project Features](#project-features)
    - [Feature 1: Course Catalog](#feature-1-course-catalog)
    - [Feature 2: Course Duplication Detection](#feature-2-course-duplication-detection)
    - [Feature 3: Stability and Performance](#feature-3-stability-performance)

- [State Management](#state-management)

---

## Project Features

### Feature 1: Course Catalog
Our platform offers a rich and diverse catalog of programming courses, catering to learners of all levels. Key features of this catalog include:

- Course Listings: Users can browse a wide range of programming courses, each with detailed descriptions and pricing information.
- Course Price Calculation: We added the total price count for the courses you have selected to ensure you that you are getting what you are paying for.
- Total Credit: You can track your remaining credit hours for the courses you are buying. We make sure that you cannot feel overwhelming and keep yourself into the right learning environment and motivation.




### Feature 2: Course Duplication Detection

We implement a system to detect if you buy any course twice by accident. As our courses can be shared in multiple devices there is no reason to buy same course twice. This feature will help you to prevent spend money on same course again and again.



### Feature 3: Stability and Performance

By the help of font end building tool vite (with react) we created single page application which is not only stable but also well-performed. We also used reusable react components to optimize and maintain the application better. We also use optimized images which helps load the application faster and use minimum user bandwidth. We are determine to give our user a better user experience.


---

## State Management

Our project utilizes react local state management techniques to efficiently handle data within the application.


### Local Component State

We use react local stage management for UI-related state or component-specific data. We use local state for:

- Fetching Data: We useState local state for storing fetched API data containing all the necessary course information.
- Update UI components in real time: We use states to update course relates status like total price, user remaining credit hour and claimed credit hour in real time to the UI.
- Storing selected course information: We use state to store the course details selected by user. We updated the store every time the user select a new course by using  react real time state update technique.

By local state management, we ensure that our project remains organized and efficient in handling data throughout the application.


Thank you for exploring our Online Programming Registration Platform! We are excited to provide a valuable learning experience for programmers of all levels. If you have any questions, feedback, or inquiries, please don't hesitate to contact our team by the provided email address.

Happy learning!

