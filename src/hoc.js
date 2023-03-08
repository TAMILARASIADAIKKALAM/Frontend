import React from 'react';

const Hoc=(OriginalComponent)=>
{
    const NewComponent=()=>
    {
        return(
            <div style={{ 
                paddingLeft: '40%', 
                paddingTop: '60px', 
                width: '30%',border:'1px solid red' }}>
            {/* <Box color="white" 
                bgcolor="palevioletred" p={1}>
                    Greetings from GeeksforGeeks!
            </Box> */}
            <OriginalComponent />
            </div>
        )
    }
    return NewComponent
}
export default Hoc;