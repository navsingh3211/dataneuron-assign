/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { useEffect,useState } from 'react';
import Popup from './Popup';
import Button from './Button';

export default function(){
  let [data,setData] = useState("");
  let [id,setId] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmitPopup = (value:any) => {
    handleClosePopup();
  };
  console.log(data,'datadata');
  
  useEffect(()=>{
    const fetchData = async()=>{
      const datafinal = await axios.get("http://localhost:3000/api/todo/get-todo");
      if(datafinal.data.data.length>0){
        setData(datafinal.data.data[0].name);
        setId(datafinal.data.data[0]._id);
        // console.log(datafinal.data.data[0])
      }
    }
    fetchData();
  },[])
  return <div>

        <h2 className="text-lg font-semibold">User data is :</h2>
        <br></br>
        <div className="text-left font-bold text-2xl">
          {
            data ?  data : "No data found!"
            
          }
          <br />
          <Button onClick={handleOpenPopup} />
          {/* <button onClick={handleOpenPopup} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button> */}
          {isPopupOpen && (
            <Popup onClose={handleClosePopup} onSubmit={handleSubmitPopup} id={id}/>
          )}
        
        </div>
  
</div>
}