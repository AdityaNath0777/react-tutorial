import { useState } from 'react'
import './App.css'

const username = "AdityaNath";

function App() {

  // // let counter = 11;
  
  // const addValue = () => {
  //   // counter = counter + 1;
  //   counter += 1;
  //   console.log(counter);

  //   // it still isn't updating on the website
  //   // so we use State

  //   // any change in State will re-render the page (or components mostly)
  // }

  // useState( <initial value> ) is a kind of hook which returns an array,
  // first one is a variable, 2nd one is a function (here method)
  const [counter, setCounter] = useState(15)
  // here 15 is initial value for counter

  const addValue = () => {
    // setCounter(counter + 1);

    // here we called the setCounter
    // and passed the updated value for counter

    // This does not update the value like it should be, why?
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // bcz React make it into batch or something, google for more! ~(> _ <)~

    // to make it Work, use callback inside the setCounter
    setCounter( (prevCounter) => prevCounter + 1);
    setCounter( (prevCounter) => prevCounter + 1);
    setCounter( (prevCounter) => prevCounter + 1);
    setCounter( (prevCounter) => prevCounter + 1);

    // now, when each time the value of counter is updated
    // prevCounter gets that value
    // and updates itself
    // and ultimatley updates the counter in the set of (here): 4
  }

  const removeValue = () => {
    // setCounter(counter - 1);

    // this is also valid approach to update the value of the Data
    let newCounter = counter/2;
    setCounter(newCounter);
    console.log("newCounter: ", newCounter);

    
    setCounter((prevCounter) => {
      // rn, prevCounter has updated value of counter

      // now, let's manipulate the value of prevCounter
      prevCounter = prevCounter - 1;
      console.log("prevCounter: ", prevCounter);

      // now it updates the value of prevCounter,
      // prints it in the console
      // return the prevCounter
      // and the counter will be updated

      return prevCounter;
    });

    // setCounter((prevCounter) => prevCounter - 1);
    // setCounter((prevCounter) => prevCounter - 1);
    // setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <h1>React Course with {username}</h1>
      {/* {username} -> variable injection */}
      <h2>Counter Value: {counter} </h2>
      <button 
        onClick={addValue}
      >Add Value</button> {" "} {/* Adding some space */}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
