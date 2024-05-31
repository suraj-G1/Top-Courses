import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
//import { Toast } from "react-toastify/dist/components";
//import toast from 'react-toastify';
import toast from "react-toastify/dist/ReactToastify.css";

import { apiUrl, filterData } from "./data";
import Spinner from "./Components/Spinner";
const App = () => {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(false);
  const [category,setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const output = await result.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something Wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="bg-bgDark2 min-h-[100vh]">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
};

export default App;
