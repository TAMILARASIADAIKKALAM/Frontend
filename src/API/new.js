import React from 'react';

const Test1=()=>
{
    const records={"name":"tamil","email":"tamil@gmail"}
    const studentdata=["tamil","tamil.com","covai"]

    const studentsrecords=`[
    {{"name":"tamil","email:tamil@gmail"},
    {"name":"srini","email:srini@gmail"},
    {"name":"thari","email:thari@gmail"},
    {"name":"subi","email:subi@gmail"}}
]`
    
    return(
        <div>
            <h1>(records.name)</h1>
            <h2>(records.email)</h2>
            <h3>{studentsrecords}</h3>
            {
                studentdata.map( (key)=>{
                    return <h1>{key.name}</h1>
                })
            }
        </div>
    )
}
export default Test1;