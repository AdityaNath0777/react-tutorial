import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement = {

//     // creating an object for react element
//     type: 'a',
//     props: {
//         href: 'https://google.co.in',
//         target: '_blank'
//     },
//     children: 'Click me to Visit Google'
// }

function MyApp(){
    return(
        <h1>Custom React App</h1>
    )
}

const AnotherElement = (
    <a href="https://google.co.in" target="_blank" rel="noreferrer">Chal Google Ghoom kar aate hai</a>
   // Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations
    // although Code Editor shows potential problems, it works
)

const areactElement = React.createElement(
    'a',
    {href: 'https://www.google.co.in', target: '_blank'},
    'Google ghumne chale?'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()  // not recommended, as it might cause some optimisation problem
    //  at backend

    // AnotherElement // works
    // AnotherElement() // not works
    // <AnotherElement /> // not works
    
    // areactElement // it runs perfectly!
    // but hey, hold on! Why?...
    // I mean, Why it works even though it doesn't follow the naming conventnion??
    
    // BCz my dost (friend), React.createElement returns React Object
    // and this is the thing (object) which React expects while render
    
    // it doesn't extract information from other elements
    
    <>
        <App />
        <MyApp />
        {AnotherElement}
        <br/>
        {areactElement}
    </>
)

// JS function returning HTML is called JSX