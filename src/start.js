fcomponent.js:
 import React from 'react'
 function demo() {
 return(
<div>
<h1>Hello everyone, Welcome to react.</h1>
</div>
 )
 }
 export default demo
Index.js:
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Fcomponent from './fcomponent';
 const root = ReactDOM.createRoot(document.getElementById('root'));

3
root.render(
<React.StrictMode>
<Fcomponent/>
</React.StrictMode>
 );

 //next calss component
 ccomponent.js:
 import React from 'react'
 class Ccomponent extends React.Component {
 state = { }
 render() {
 return (
<div>
<h1>Class Component:</h1>
<h2>Hello Everyone,Welcome To React</h2>
</div>
 );
 }
}
export default Ccomponent;
5
Index.js:
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Ccomponent from './ccomponent';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
<React.StrictMode>
<Ccomponent/>
</React.StrictMode>
 )
 //conditionrender
 conditionalrendering.js:
 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 class Conditionalrendering extends Component {
 state = { count: 0 ,name:"Zero"}
 changeCount(){
 if(this.state.count===0 )
 return"Zero";
 else if(this.state.count===10)
 return"Ten";
 else
 return this.state.count;
7
 }
 changeColor1(){
 let str="btn btn-";
 if(this.state.count===0){
 str+="danger";
 }
 else {
 str+="success";
 }
 return str;
 }
 changeColor2(){
 let str="btn btn-";
 if(this.state.count===10){
 str+="danger";
 }
 else {
 str+="success";
 }
 return str;
 }
 render() {
 return (<div style={{textAlign:'center',padding:50}}>
 <h1 style={{padding:100}}> Conditional Rendering:</h1>
 <button className={this.changeColor1()}style={{width:100,height:50}}
 disabled={this.state.count===0} onClick={() =>
 { this.setState({ count: this.state.count - 1 }) }}>- </button>
 <span style={{padding:50,fontSize:27}}>{this.changeCount()}</span>
 <button className={this.changeColor2()}
 style={{width:100,height:50}}disabled={this.state.count===10}
 onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
 </div>);
 }
}
export default Conditionalrendering;
8
Index.js:
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Conditional from './conditional';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
<React.StrictMode>
<Conditional/>
</React.StrictMode>);
//parent child
parent.js:
 import React from 'react';
 import Child from './child';
 class Parent extends React.Component{
state = {
name: "",
}
handleCallback = (childData) =>{
this.setState({name: childData})
}
render(){
const {name} = this.state;
return(
<div style={{textAlign:'center'}}>
10
<h1>Child and Parent Components</h1>
<Child parentCallback = {this.handleCallback}/>
{name}
</div>
)
}
 }
 export default Parent;
Child.js:
 import React from 'react'
 class Child extends React.Component{
onTrigger = (event) => {
this.props.parentCallback(event.target.myname.value);
event.preventDefault();
}
render(){
return(
<div>
<form onSubmit = {this.onTrigger}>
<input type = "text"
name = "myname" placeholder = "Enter Name"/>
<br></br><br></br>
<input type = "submit" value = "Submit"/>
<br></br><br></br>
</form>
</div>
)
}
 }
 export default Child
Index.js:
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Parent from './parentchild';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
<React.StrictMode>
<Parentt/>
</React.StrictMode>
 );
