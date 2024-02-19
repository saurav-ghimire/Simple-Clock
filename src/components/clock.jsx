import { useEffect, useState } from "react";

function Clock() {

  let time = new Date();

  return <>
  <h3>Date : {time.toLocaleDateString()}</h3>
  <h3>Time {time.toLocaleTimeString()}</h3>
  </>;
}

export default Clock;