import { useState } from 'react'
import ContactList from './ContactList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactList/>
    
    </>
  )
}

export default App
