import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {

    // creating an object for react element
    type: 'a',
    props: {
        href: 'https://google.co.in',
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

function MyApp(){
    return(
        <h1>Custom React App</h1>
    )
}

const AnotherElement = (
    <a href="https://google.co.in" target="_blank">Chal Google Ghoom kar aate hai</a>

    // although Code Editor shows potential problems, it works
)

const areactElement = React.createElement(
    'a',
    {href: 'https://www.google.co.in', target: '_blank'},
    'Google ghumne chale?'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
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

    <App />
)

// JS function returning HTML is called JSX