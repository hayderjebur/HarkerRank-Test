import React,{useState}  from "react";
import "./index.css";

function CustomerList() {
  const [user,setUser]=useState({
    name:''
  });
  const [users,setUsers]=useState([]);

  const onChange=(e)=>{
    setUser({
        [e.target.name]: e.target.value,
      });
     
  }
  const onSubmit=()=>{
    e.preventDefault()
   setUsers([...users,user])

  }
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section onSubmit={onSubmit} className="layout-row align-items-center justify-content-center">
        <input onChange={(onChange} value={user.name} name='name' type="text" className="large" placeholder="Name" data-testid="app-input"/>
        <button type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
      </section>
      {users.map(user=>{
      <ul className="styled mt-50" data-testid="customer-list">
          <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >{user.name}</li>
      </ul>
  })}
    
    </div>
  );
}

export default CustomerList