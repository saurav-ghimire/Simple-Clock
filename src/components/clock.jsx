import { useEffect, useState } from "react";

function Clock() {
  // const time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
    setTime(new Date());     
    }, 1000)
  
  
  // To Cancle the Interval
  return () => {
    clearInterval(intervalID);
    console.log('Cancled the interval')
  }
  },[])


  return <>
  <div className="date-wrapper">
    <div className="custom-date">
      <h3><span>Date : {time.toLocaleDateString()}</span></h3>
    </div>
    <div className="custom-time">
      <h3><span>Time : {time.toLocaleTimeString()}</span></h3>
    </div>
  </div>
  </>;
}

export default Clock;