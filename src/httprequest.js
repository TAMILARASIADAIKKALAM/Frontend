fetch.js:
import { useEffect, useState } from "react";
export default function FetchAPI(){
const [user, setUser] = useState([]);
useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => setUser(res))
})
console.log(user)
return(
<div className="main">
{user.map(u => (
<div>{u.name}, {u.id}, {u.email}</div>
))}
</div>
)
}
App.js:
import './App.css';
import FetchAPI from './fetch';
function App() {
 return (<>
<FetchAPI />
</>);
}
export default App;