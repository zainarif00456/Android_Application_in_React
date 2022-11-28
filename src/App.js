import './App.css';
import { io } from 'socket.io-client';
import {useEffect, useState} from 'react'


const socket = io.connect("http://localhost:3002") 


function App() {
  const [msg, setMsg] = useState("")
  const [receive, setreceiveMsg] = useState("")
  const sendmsg = ()=>{
    console.log("clicked")
      socket.emit("send_msg", {message: msg})
  }
useEffect(()=>{
  socket.on("receive_msg", (data)=> {
    setreceiveMsg(data.message)
   
  })
}, [])


  return (
    <>
    <div>
      <input type="text" placeholder="Message" onChange={(event)=>{
        setMsg(event.target.value);
      }} />
      <button onClick={sendmsg}>Send</button>
    </div>
    {
      <div>
        <h1>
          {receive}
        </h1>
      </div>
    }
      
    </>
  );
}

export default App;
