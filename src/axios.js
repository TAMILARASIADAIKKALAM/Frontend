import React,{useState} from 'react';
import axios from 'Axios';
const Axiospage=()=>
{
    const [records,setRecords] =useState([])

    const getdata=()=>{
        axios.get("https://jsonplaceholder.typicode.com/post")
        .then((response)=>{
            setRecords(response.data)
        })
    }
    
    return(
    <div>
    <button onClick={getdata}>Getrecords</button>
    {
        records.map((key)=>
        {
            <div>
               <h1>world: {key.userId}</h1>
               <h2>Id: {key.id}</h2>
               <h3>title :{key.title}</h3>
            </div>
        }
        )
    }
   </div>
    
);
}
export default Axiospage;