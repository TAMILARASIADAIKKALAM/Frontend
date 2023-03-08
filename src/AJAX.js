import React,{useState} from 'react';

const Ajex=()=>
{
    const [records,setrecords] =useState([])

    const getdata=()=>{
        fetch("https://jsonplaceholder.typicode.com/post")
        .then((data)=>{
            alert("success")
        })
        .then((error)=>{
            alert("failure")
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
        }}
    )
    </div>
    )
}
export default Ajex;

