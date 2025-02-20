import React from 'react'

 const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  function handleClick(title){
    setCategory(title);

  }
  return (
    <div className='flex flex-wrap w-11/12 max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {
        filterData.map((data) =>{
             return <button onClick={()=>handleClick(data.title)}
             className={`text-lg rounded-md py-1 px-2 font-medium text-white bg-black
              hover:bg-opacity-50 border-2 transition-all duration-300
              ${category === data.title?"bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
              `}
              key={data.id}>
                {data.title}
            
            </button>
        })
        }
    </div>
  );
}

export default Filter;
