import React,{useState, useEffect} from "react";
import { useParams ,useNavigate } from "react-router-dom";
import axios from 'axios'
function UpdateUser(){
    const {id} =useParams()
    const[name,  setName] = useState()
    const[email, setEmail] =useState()
    const[age ,setAge] =useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result =>{
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
            console.log(result)
        })
        .catch(err => console.log(err))
    }, [])

     const Update =(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3001/UpdateUser/'+id, {name,email, age})
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err =>console.log(err))
     }

    return(
        <div className="d-flex vh-100 bg-success justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
        <div className="mb-2">
            <label htmlFor="email" className="form-label">name</label>
            <input type="text" placeholder="enter the name" className="form-control rounded" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="mb-2">
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" placeholder="enter the email" className="form-control rounded" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="mb-2">
            <label htmlFor="email" className="form-label">age</label>
            <input type="text" placeholder="enter the age" className="form-control rounded" value={age} onChange={(e)=>{setAge(e.target.value)}} />
        </div>

        <button className="btn btn-success">update</button>
     </form>
     </div>
     </div>
    )

}
export default UpdateUser;