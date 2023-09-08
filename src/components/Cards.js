import React from "react";
import Card from "./Card";

const Cards = ( {courses} ) => {
    
    //to get all data in one array
    //returns you a list of all courses received from the api response
    let allCourses=[];
    const getCourses = () => {
        Object.values (courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    
    return (
        <div>
            {
                getCourses().map( (course) => {
                    return ( <Card key={course.id} course={course}/> )
                })
            }
            
        </div>
    )
}

export default Cards;