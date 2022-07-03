import React,{useState} from 'react'

function Form(initialvalue,validateonChange=false,validate) {
    const [formvalue, setFormvalue] = useState(initialvalue)
    const [error,setError]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormvalue({...formvalue,[name]:value})
        if(validateonChange){
          validate({[name]:value})
        }

    };

  return {
    formvalue,
    setFormvalue,
    handleChange,
    error,
    setError
}
}

export default Form