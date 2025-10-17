
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const suggestions = ["Mumbai","Delhi","Haryana","Ayodhya"]
  const [text,setText] = useState("");
  const [temp,setTemp] = useState([])

  useEffect(() => {
    if(text === "")return
    const res = suggestions.filter((item) => {
      return item.toLowerCase().includes(text.toLowerCase())
    })
    setTemp(res)
  },[text])
  return (
    <div>
        {/* Do not remove the main div */}
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <ul>
          {
            temp.map((item,index) => {
              return (
                <li 
                key={index}
                onClick={() => setText(item)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App
