
import './App.css'
import Case from './components/Case'
import Cat from './components/Cat'
import Con from './components/Con'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Test from './components/Test'
import Wp from './components/Wp'

function App() {
  
  return (
    <div className='font-primary'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Cat/>
    <Case/>
    <Wp/>
    <Team/>
    <Test/>
    <Con/>
    <Footer/>
    </div>
  )
}

export default App
