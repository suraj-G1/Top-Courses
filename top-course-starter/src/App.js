import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
//import { Toast } from "react-toastify/dist/components";
//import toast from 'react-toastify';
import toast from "react-toastify/dist/ReactToastify.css";


import {apiUrl,filterData} from './data';
const App = () => {
  const [courses,setCourses] = useState('');
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const result = await fetch(apiUrl);
        const output=await result.json();
        setCourses(output.data);


      }
      catch(error){
        toast.error("Something Wrong");
      }
    }
    fetchData();
  },[]);
  return <div>
    <NavBar></NavBar>
    <Filter filterData = {filterData}></Filter>
    <Cards courses={courses}></Cards>
  </div>;
};

export default App;
