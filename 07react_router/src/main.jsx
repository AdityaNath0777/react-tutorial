import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
import Contact from './components/Contact/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
    {/* 
      * now everything will come after the '/' 
      * So, no need to write / everytime    
    */}

      {/* Also Valid */}
      {/* <Route></Route> */}
    
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='user/' element = {<User />} >
        <Route path=':userId' element = {<User />} />
      </Route>
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element = {<Github />} 

      />
      <Route path='contact' element = {<Contact />} />

      <Route path='*' element = {<div>Not Found</div>} />

      {/* 
          <Route path='about' element = {<About />} >
            <Route path='company' element = {koko} />
          </Route> 
      */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
