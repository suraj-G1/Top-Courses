import React, { useEffect } from "react";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";

import {apiUrl,filterData} from './data';
const App = () => {

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const result = await fetch(apiUrl);
        const data =await result.json();
      }
      catch(error){

      }
    }
  });
  return <div>
    <NavBar></NavBar>
    <Filter filterData = {filterData}></Filter>
    <Cards></Cards>
  </div>;
};

export default App;
