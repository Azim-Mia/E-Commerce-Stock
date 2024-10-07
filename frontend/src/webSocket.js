import {useEffect} from 'react';
import io from 'socket.io-client';
const Websoket =()=>{
useEffect(()=>{
   //connect server..
const socket = io.connect('/');
socket.on('message', (smg)=>{
  alert(smg);
})
 },[]);
  return (<>
  </>)
}
export default Websoket