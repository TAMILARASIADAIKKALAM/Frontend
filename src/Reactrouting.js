App.js
import './mainpage.css';
import './returnpage.css';
import Mainpage from './mainpage'
import Returnpage from './returnpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
return(
<Router>
<div className='App'>
<Routes>
<Route exact path='/' element={<Mainpage />}></Route>
<Route exact path='/mainpage' element={<Mainpage />}></Route>
<Route exact path='/returnpage' element={<Returnpage />}></Route>
</Routes>
</div>
</Router>
)
}
export default App;
29
App.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);
});
Index.css
html, body, #root, #root>div {
height: 100%;
}
body {
margin: 0;
padding: 0;
font-family: sans-serif;
height: 100%;
}
Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
<App />,
document.getElementById('root')
);
30
Mainpage.js
//import React from 'react';
import "./mainpage.css"
import "./returnpage.css"
import { Link } from "react-router-dom";
const Mainpage = () => {
return (<>
<div>
<h1>This is Mainpage</h1>
<Link to="/returnpage" className="v2_21">Next Page</Link>
</div>
</>
);
};
export default Mainpage;
mainpage.css
.v2_21 {
top: 100px;
left: 50vh;
position: absolute;
font-family: Inter;
font-weight: Bold;
font-size: 30px;
text-align: center;
}
Returnpage.js
import "./mainpage.css"
import "./returnpage.css"
import { Link } from "react-router-dom";
const Returnpage = () => {
return (<>
<div>
<h1>This is Next Page</h1>
<Link to='/mainpage' class="v2_21">Back to mainpage</Link>
</div>
</>
);
};
export default Returnpage;
31
returnpage.css
.v2_21 {
top: 100px;
left: 50vh;
position: absolute;
font-family: Inter;
font-weight: Bold;
font-size: 30px;
text-align: center;
}
32
Output