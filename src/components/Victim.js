import React,{Component} from "react";
import axios from "axios";
class Victim extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        name:"",
        gender:"",
        address:"",
        age:"",
        mobile:"",
        complaint:"",
        showsdata:[],
    };
    }
    componentDidMount(){
        axios.get("http://localhost:8080/showvictim")
        .then(response =>{
            this.setState({
                showsdata:response.data
                
            });
        });
    }
    handlename = (event) =>{
        this.setState({ name : event.target.value});
    };
    handlegen = (event) =>{
        this.setState({ gender : event.target.value});
    };
    handleadd = (event) =>{
        this.setState({ address : event.target.value});
    };
    handleage = (event) =>{
        this.setState({ age: event.target.value});
    };
    handlemob = (event) =>{
        this.setState({ mobile : event.target.value});
    };
    handlecom=(event)=>{
        this.setState({complaint : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            name: this.state.name,
            gender: this.state.gender,
            address: this.state.address,
            age: this.state.age,
            mobile: this.state.mobile,
        complaint:this.state.complaint,
        };
        console.log(data);
        axios.post("http://localhost:8080/addvictim",data).then((response)=>{
            this.setState({
                showsdata:[...this.state.showsdata,response.data],
                name:"",
                gender:"",
                address:"",
                age:"",
                mobile:"",
            complaint:"",
            });
        });
    };
    handleUpdatee = (id, data) => {
        axios.put(`http://localhost:8080/update/${id}`, data).then((response) => {
            const updateData = this.state.showsdata.map((user) => {
                if (user.id === response.data.id) {
                    return response.data;
                } else {
                    return user;
                }
            });
            this.setState({ showsdata: updateData });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/del/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updateData = this.state.showsdata.filter(
                (user) => user.id !== id
            );
            this.setState({ showsdata: updateData });
        });
    };
    handleEdit = (data) => {
        this.setState({
            id: data.id,
            name: data.name,
            gender: data.gender,
            address: data.address,
            age: data.age,
            mobile: data.mobile,
        complaint: data.complaint,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate= (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            gender: this.state.gender,
            address: this.state.address,
            age: this.state.age,
        };
        const id = this.state.id;
        axios.put(`http://localhost:8080/update/${id}`, data).then((res) => {
                console.log(res.data);
                this.setState({
                    name:"",
                    gender:"",
                    address:"",
                    age:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };
    render()
    {
        return(
            <div>
            <form style={{marginTop:"20px",marginLeft:"20px",marginBottom:"20px",justifyContent:"center"}} onSubmit={this.handleSubmit} className="tab" >
               <label>Name</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handlename}
               value={this.state.name}
               />
               <br></br>
               <label>gender</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handlegen}
               value={this.state.gender}
               /><br></br>
               <label>address</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handleadd}
               value={this.state.address}
               /><br></br>
               <label>age</label>
               <input
               className="tab"
               type="number"
               style={{marginBottom:"10px"}}
               onChange={this.handleage}
               value={this.state.age}
               /><br></br>
               <label>mobile</label>
               <input
               className="tab"
               type="number"
               style={{marginBottom:"10px"}}
               onChange={this.handlemob}
               value={this.state.mobile}
               /><br></br>
               <label>complaint</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handlecom}
               value={this.state.complaint}
               /><br></br>
               <button style={{width:"100px"}}className="submitt" type="submit">SUBMIT</button>
               </form>
               <table className="output" border={2}>
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>gender</th>
                       <th>Address</th>
                       <th>age</th>
                       <th>mobile</th>
                       <th>complaint</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {this.state.showsdata.map((data) => (
                       <tr key={data.id}>
                           <td>{data.id}</td>
                           <td>{data.name}</td>
                           <td>{data.gender}</td>
                           <td>{data.address}</td>
                           <td>{data.age}</td>
                           <td>{data.mobile}</td>
                           <td>{data.complaint}</td>
                           <td>
                               <button onClick={() => this.handleEdit(data)}>Edit</button>
                           </td>

                           <td>
                               <button onClick={() => this.handleDelete(data.id)}>
                                   Delete
                               </button>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
           <br></br><br></br><br></br>
           </div>
               );
               
    }
}
export default Victim;