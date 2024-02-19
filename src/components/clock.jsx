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
  <h3>Date : {time.toLocaleDateString()}</h3>
  <h3>Time {time.toLocaleTimeString()}</h3>
  </>;
}

export default Clock;