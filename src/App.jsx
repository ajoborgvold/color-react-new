import './App.css'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Header from './components/Header'
import Form from './components/Form'
import ColorScheme from './components/ColorScheme'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Form />
      <ColorScheme />
      <Footer />
      <Modal />
    </div>
  )
}

export default App
