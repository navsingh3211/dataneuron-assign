// components/Popup.js
import React, { useState } from 'react';
import axios from 'axios';


const Popup = ({ onClose, onSubmit ,id}:any) => {
  const [value, setValue] = useState('');

  const handleSubmit = async () => {
    onSubmit(value);
    
    try{
      const response = await axios.put(`http://localhost:3000/api/update-todo/${id}`,{
        name:value
      });
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div>
      <input className={"bg-black"} type="text" onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
