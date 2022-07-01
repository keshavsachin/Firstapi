import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup() {
    const initialvalue={Username:"",Phone:"",Password:""}
    const [formvalue, setFormvalue] = useState(initialvalue)
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormvalue({...formvalue,[name]:value});
    };
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("https://guarded-crag-39247.herokuapp.com/api/register",formvalue)
        .then((res) => localStorage.setItem("Token", res.data.token))
        .then(() => navigate("/"));

    };
  return (
    <div>
        <form >
            <h1>Signup</h1>
            <input placeholder='Username' onChange={handleChange} value={formvalue.Username} name="Username" ></input>
            <input placeholder='Phone' onChange={handleChange} value={formvalue.Phone} name="Phone" ></input>
            <input placeholder='Password' onChange={handleChange} value={formvalue.Password} name="Password" ></input>
            <button type='submit' onClick={(e)=>handleSubmit(e)}>SignIn</button>
        </form>
    </div>
  )
}

export default Signup