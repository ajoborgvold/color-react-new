import './App.css'
import { useEffect, useState, useContext } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ColorScheme from './components/ColorScheme'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { AppContext } from './context/AppContext'

function App() {
  const [isNewUser, setIsNewUser] = useState(false)
  const { setShowColorPicker } = useContext(AppContext)

// Check if it is a new user or not. If new user, render the modal
  useEffect(() => {
    const isUserInLocalStorage = localStorage.getItem('isNewUser')
    !isUserInLocalStorage && setIsNewUser(true)
    localStorage.setItem('isNewUser', 'false')
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setShowColorPicker(false)
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
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
