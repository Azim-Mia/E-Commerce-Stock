import {useState} from 'react';
import axios from 'axios';
const ChangePassword = ()=>{
  const [ oldPassword, setOldPassword] =useState("");
  const [newPassword, setNewPassword] =useState("");
  const handleChangePassword =()=>{
  axios.defaults.withCredentials=true;
   axios.put('http://localhost:3001/auth/user/changePin', {oldPassword,newPassword})
  .then((res)=>alert(res.data.message)); 
  }
  return (<>
  <from>
  <div><label>
Old Password: 
     <input type="password" onChange={(e)=>setOldPassword(e.target.value)} name="oldPassword" />
  </label></div>
    <div><label>
    New Password:
     <input type="password" onChange={(e)=>setNewPassword(e.target.value)} name="newPassword" />
  </label></div>
  <button type="submit" onClick={handleChangePassword}>submit</button>
  </from>
  </>)
}
export default ChangePassword;