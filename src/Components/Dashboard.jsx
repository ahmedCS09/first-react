import { useState, useEffect, useRef } from "react";
import Carousel from "./Carousel";

let Dashboard = () => {

  const [data, setData] = useState([])
  const [text, setText] = useState("U")
  const mainText = "Users"
  const charIndex = useRef(1)
  const timeoutRef = useRef(null)

  let update = () => {
let updateText = () => {
    if (charIndex.current > mainText.length)
    {
     charIndex.current = 1 
    }

    setText(mainText.slice(0, charIndex.current))
    charIndex.current ++

    timeoutRef.current = setTimeout(updateText, 200)
  }
  updateText()
  
  }

  let fetchUsers = async() => {
  try{
  let res = await fetch('https://dummyjson.com/users').then(res => res.json());
  setData(res.users);
  }
  catch(error)
  {
    console.log(error)
  }
}

useEffect(() => {
  update() 
  return () => clearTimeout(timeoutRef.current)
}, [])

useEffect(() => {fetchUsers()}, [])

    return(
        <>
        <br/>
        <h1 className="heading" style={{textAlign: 'center', fontSize: 'xx-large', fontWeight: 'bolder', color: 'rgba(120, 135, 36, 1)'}}>{text}</h1>
        <br/>
        <div className="carousel"><Carousel /></div>
        <br/>
        <div className='w-screen h-auto flex justify-center'>
        <div className="w-9/10 h-auto flex flex-wrap gap-[50px] justify-center">{data.map((item) => (
          <div key={item.id} className="card w-96 min-w-[375px] h-[265px] row border-2 border-black rounded-lg p-4 ">
            <div className='w-full flex justify-center'><img src={item.image}></img></div>
            <div className="text-center"> {item.firstName + " " + item.lastName}</div>
            <br/>
            <div><b>University: </b> {item.university}</div>
             <div><b>Address: </b> {item.address.address}</div>
             <div className='whitespace-nowrap'><b>Email: </b> {item.email}</div>
          </div>
          ))}</div>
          </div>       
        </>
    )
}

export default Dashboard