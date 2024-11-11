import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendbtn from './assets/send.svg'
import usericon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
// import {sendMsgToOpenAI}  from './opena1.js'

import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const msgEnd =  useRef(null);

  const [input,setInput]=useState("");
  const [messages,setMessages] = useState([
    {
    text:"Hi! I’m ChatGPT, an AI language model created by OpenAI. I'm here to help you with a wide range of topics—answering questions, brainstorming ideas, providing explanations, or just chatting. Let me know how I can assist you!",
    isBot:true,
  }
]);

useEffect(()=>{
  msgEnd.current.scrollIntoView();
},[messages]);

const handleSend= async ()=>{
  const text = input;
  setInput('');
  setMessages([
    ...messages,
    {text,isBot:false}
  ])
  const res=await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text,isBot:false  },
      {text:res, isBot: true}
      
    ]);
}



const handleEnter = (e) =>{
  if(e.key === 'Enter') handleSend(); 
}

const handleQuery = async (e) =>{
  const text = e.target.value;
  setMessages([
    ...messages,
    {text,isBot:false}
  ]);
  const res=await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text,isBot:false  },
      {text:res, isBot: true}
      
    ]);
}

  return (
    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
<div className="upperSideTop"> <img src={gptLogo} alt="Logo" className="logo" /> <span className='brand'>ChatGPT</span></div>
 
  <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
  <div className="upperSideBottom">
    <button className="query" onClick={handleQuery} value={"What is programming"}><img src={msgIcon} alt="Query" className="" />What is Programming ?</button>
    <button className="query" onClick={handleQuery} value={"How to use an API"}><img src={msgIcon} alt="Query" className="" />How to use an API ?</button>
  </div>
</div>
    <div className="loweerSide">
<div className="listItem"><img src={home} alt="Home" className="listitemImg" />Home</div>
<div className="listItem"><img src={saved} alt="Saved" className="listitemImg" />Saved</div>
<div className="listItem"><img src={rocket} alt="Upgrade" className="listitemImg" />Upgrade to pro</div>
        </div>
      </div>
      <div className="main">
<div className="chats">

  {/*
<div className="chat">
  <img className='chatimg'src={usericon} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A amet vero nobis ea. Cupiditate voluptatibus quae consequuntur dolores. Voluptatum porro cupiditate quos quaerat dicta modi magni alias corporis accusamus officiis.</p>
</div>
<div className="chat bot">
  <img className='chatimg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam odit ratione ad, ullam repellendus saepe accusantium illo ipsam eum aliquam aperiam eius veritatis facilis nihil, fugit autem cumque alias. Nulla inventore quaerat iste blanditiis quisquam velit excepturi natus! Ullam neque corporis veniam qui quae impedit quasi saepe quidem at vitae similique temporibus officiis sed non libero, dolore facere culpa illo enim, alias tenetur? Itaque iure earum ratione omnis, tempore delectus incidunt nobis eligendi officiis quae aut minus sint fugiat dicta, et repudiandae? Quas, reprehenderit dolorum ducimus ipsum similique quia laboriosam distinctio mollitia praesentium sint, a provident atque, aliquam eius.</p>
</div>
*/}


{messages.map((message,index)=>
 <div key={index} className={message.isBot?"chat bot":"chat"}>
  <img className='chatimg' src={message.isBot?gptImgLogo:usericon} alt="" /><p className="txt">{message.text}</p>
</div>
)}
<div ref={msgEnd}/>


</div>
<div className="chatFooter">
  <div className="inp">
    <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}} /> <button className="send" onClick={handleSend}><img src={sendbtn} alt="send" /></button>
  </div>
  <p>ChatGPT may produce inaccurate information about people ,places,or facts.ChatGPT August 20 version.</p>
</div>
      </div>
    </div>
  )  
}

export default App
