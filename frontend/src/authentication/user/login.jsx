import {useState} from 'react';
import axios from 'axios';
const LogIn = ()=>{
  const [ email, setEmail ] =useState("");
  const [password, setPassword] =useState("");
  const handleLogin =()=>{
  axios.defaults.withCredentials=true;
   axios.post('http://localhost:3001/auth/user/login', {email,password})
  .then((res)=>alert(res.data.message)); 
  }
  return (<>
  <from>
  <div><label>
    Email:
    <input type="text" onChange={(e)=>setEmail(e.target.value)} name="name" />
  </label></div>
    <div><label>
    Password:
    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
  </label></div>
  <button type="submit" onClick={handleLogin}>LogIn</button>
  </from>
  </>)
}
export default LogIn;