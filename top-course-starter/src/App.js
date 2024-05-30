import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
//import { Toast } from "react-toastify/dist/components";
//import toast from 'react-toastify';
import toast from "react-toastify/dist/ReactToastify.css";


import {apiUrl,filterData} from './data';
import Spinner  from "./Components/Spinner";
const App = () => {
  const [courses,setCourses] = useState('');
  const [loading,setLoading] = useState(false);
  async function fetchData(){
    setLoading(true);
    try{
      const result = await fetch(apiUrl);
      const output= await result.json();
      setCourses(output.data);


    }
    catch(error){
      toast.error("Something Wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return( 
  <div>
    <div>
      <NavBar/>
    </div>
    <div>
      <Filter filterData = {filterData}/>
    </div>
    <div>
       
        {loading ? (<Spinner/>):(<Cards courses={courses}/>)}
      
    </div>
      
    
  </div>
  );
};

export default App;
