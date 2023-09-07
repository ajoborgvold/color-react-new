import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ColorScheme from './components/ColorScheme'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [isNewUser, setIsNewUser] = useState(false)

//--- Check if it is a new user or not. If new user, the modal will be rendered, if not the modal will not be rendered --///
  useEffect(() => {
    const isUserInLocalStorage = localStorage.getItem('isNewUser')
    !isUserInLocalStorage && setIsNewUser(true)
    localStorage.setItem('isNewUser', 'false')
  }, [])

  return (
    <div className='app-container'>
      <Header />
      <Form />
      <ColorScheme />
      <Footer />
      {isNewUser && <Modal />}
    </div>
  )
}

export default App
