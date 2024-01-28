// import { useState } from 'react'

import Youtube from "./Youtube"

function App() {
  // const [count, setCount] = useState(0)
  const username = "AdityaNath";
  return (
    <>
      <h1>Jai Sita Raam</h1>
      <Youtube />
      <h3>Mera naam hai {username}</h3>
      <h3>This is Vite React App {" "} {/* Empty string here is for extra space */}  #{2+2}</h3> {/* It works absolutely fine */}
      {/* in JS Object, it literally rendered as a string containing space */}

      {/* But it should not be conditional or something */}
      {/* Meaning, it should/already be evaluated to some definite value */}

      {/* <h3>Tumhara naam hai { (if(username === "AdityaNath")) ? " ", : "Chor?"} </h3> */}
      {/* Here it throws ERROR!!! */}


    </>
  )
}

export default App
