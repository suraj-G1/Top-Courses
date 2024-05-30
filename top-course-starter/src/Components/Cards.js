import React from 'react'
import Card from './Card'

 const Cards = (props) => {
  let courses = props.courses;

  function getCourses (){
    let allCourses = [];
    Object.values(courses).forEach(courseCategory =>{
      courseCategory.forEach(course =>{
        allCourses.push(course);
      })
    })
      return allCourses;
    }
  
  return (
    <div>
      {
      getCourses().map((course)=>{
        return <Card course = {course} key={course.id}/>
      })
      }
    </div>
  )
  }


export default Cards;
