import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  // State-Variable: component-specific memory is called state.
  /*  updating a local variable, say, index, Two things prevent that change from being visible:

    * Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
    * Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data. 
  */

  // So, To update a component with new data, two things need to happen:
  // Retain the data between renders.
  // Trigger React to render the component with new data (re-rendering).
  
  // The useState Hook provides those two things:
  // A state variable to retain the data between renders.
  // A state setter function to update the variable and trigger React to render the component again.

  const [length, setLength] = useState(8); // here, [] = object/func() is called array destructuring
  //  it “destructurizes” by copying items into variables

  // State is not tied to a particular function call or a place in the code, 
  // but it’s “local” to the specific place on the screen.
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  /**
   * Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.
   * You can’t call Hooks inside conditions, loops, or other nested functions. 
   * Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. 
   * You “use” React features at the top of your component 
   * similar to how you “import” modules at the top of your file.
   */

  // very imp hook, useRef
  // useRef(initialValue) 
  const passwordRef = useRef(null);
  // initialValue: The value you want the ref object’s current property to be initially. 
  // * It can be a value of any type. This argument is ignored after the initial render.

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback( fn, dependencies)
  // React will return (not call!) your function back to you during the initial render
  // React will give you the same function again if the dependencies have not changed since the last render
  const generatePassword = useCallback(() => {
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for(let i=0; i<length; ++i){
        const char = Math.floor(Math.random()*str.length + 1);
        pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  // consideer useCallback -> for performance optimisation
  // o/w a state variable or a ref may be more appropriate.


  // useEffect -> when we want to respond as soon as there is change in even one of the dependencies
  // It lets you synchronize a component with an external system.
  // useEffect( setupFn(), dependencies[]? )
  useEffect( () => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  // Effects only run on the client. They don’t run during server rendering


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    // passwordRef.current?.select(); // kuch to meaning hai re iska, BABA 🥸
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className='text-white text-center my-3' >Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly

          // Getting the reference of password area
          ref={passwordRef}

        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
        {/* length range */}
          <input 
            type="range"
            min = {6}
            max = {100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}
            name="" 
            id=""

          />
          <label htmlFor="length"> Length: {length}</label>
        </div>

        {/* Number Checkbox */}
        <div className="flex items-center gap-x-1">
          <input 
            type = 'checkbox'
            defaultChecked = {numberAllowed}
            id = 'characterInput'
            onChange={ () => {
              setNumberAllowed((prev) => !prev);
            }}

          />
          <label htmlFor="number"> Numbers</label>
        </div>

        {/* Character Checkbox */}
        <div className="flex items-center gap-x-1">
          <input 
            type = 'checkbox'
            defaultChecked = {charAllowed}
            id = 'characterInput'
            onChange={ () => {
              setCharAllowed((prev) => !prev);
            }}

          />
          <label htmlFor="charInput"> Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
