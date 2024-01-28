import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind CSS</h1>
     <Card username="AdityaNath" role="Senior Engg." country="India" location="Delhi" />
     <Card username="JoJo Mahesh" role="SDE" country="India" location="Delhi" />
     <Card username="Kumar Sharma" role="Data Analyst" country="India" location="Delhi" />
    </>
  )
}

export default App
