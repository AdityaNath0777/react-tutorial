import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  // function changeColor(color){
  //   setColor(color);
  // }


  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              // onClick={ ()=> changeColor('red')}
              // onClick={setColor('red')} // too many renders, Error!!
              // if you call it without an inline function, 
              // the state is set when the component is rendered. 
              // This causes the component to re-render as the state is updated.

              // An inline function is a function that’s defined when the component is rendered. 
              // This onClick event handler is now called by React only when the button is clicked by a user.
              onClick={ ()=> setColor('red')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white text-lg'
              style={{backgroundColor: 'red'}}
            >Red</button>
            <button
              onClick={ ()=> setColor('#e1d217')}
              // default yellow is too bright for big screen, thus used a little dim shade
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black text-lg'
              style={{backgroundColor: 'yellow'}}
            >Yellow</button>
            <button
              onClick={ ()=> setColor('green')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white text-lg'
              style={{backgroundColor: 'green'}}
            >Green</button>
            <button
              onClick={ ()=> setColor('blue')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-white text-lg'
              style={{backgroundColor: 'blue'}}
            >Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
