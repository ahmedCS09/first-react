import './App.css'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Components/Dashboard.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Footer from './Components/Footer.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={
        <>
        <div className='w-screen parent-dash'>
        <Navbar />
        <Dashboard />
        <Footer />
        </div>
        </>
        } />

<Route path = "/register" element = {
  <>
  <Register />
  </>
}

/>

<Route path = "/login" element = {
  <>
  <Login />
  </>
}

/>

        <Route path = "/about" element = {
          <>
          <Navbar />
          <br/>
             <About />
             <Footer />
          </>
        }/>

        <Route path = "/contact" element = {
          <>
          <Navbar />
             <Contact />
             <Footer />
          </>
        }/>

        <Route path='*' element = {<Error />}/>

    </Routes>
    </>
  )

}
export default App