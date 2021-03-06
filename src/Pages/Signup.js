import React from 'react'
import axios from 'axios'
import Form from '../CustomHooks/Form'
import {useNavigate} from 'react-router-dom'
function Signup() {
    const initialvalue={Username:"",Phone:"",Password:""}
   
    const navigate=useNavigate();

    const validate=(fieldvalue=formvalue)=>{
        let temp={...error}
        if("Username" in fieldvalue)
         temp.Username=fieldvalue.Username?"":"username is required"
        if("Phone" in fieldvalue)
         temp.Phone=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(fieldvalue.Phone)?"":"phone number is required"
        if("Password" in fieldvalue)
             temp.Password=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(fieldvalue.Password)?"":"password is required"
        setError({...temp})
        if(fieldvalue==formvalue)
        return Object.values(temp).every(x=>x=="")

    }

    const {formvalue,setFormvalue,handleChange,error,setError}=Form(initialvalue,true,validate)
    
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(validate()){
            await axios.post("https://guarded-crag-39247.herokuapp.com/api/register",formvalue)
            .then((res) => localStorage.setItem("Token", res.data.token))
            .then(() => navigate("/"));
        }
       

    };
  return (
    <div>
        <form>
            <h1>Signup</h1>
            <input placeholder='Username' onChange={handleChange} value={formvalue.Username} name="Username" ></input>
            <p>{error.Username}</p>
            <input placeholder='Phone' onChange={handleChange} value={formvalue.Phone} name="Phone" ></input>
            <p>{error.Phone}</p>
            <input placeholder='Password' onChange={handleChange} value={formvalue.Password} name="Password" ></input>
            <p>{error.Password}</p>
            <button type='submit' onClick={(e)=>handleSubmit(e)}>SignIn</button>
            
        </form>
    </div>
  )
}

export default Signup