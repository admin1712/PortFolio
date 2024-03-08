
import  styles from './App.module.css'
import About from './componets/About/About'
import AboutMe from './componets/AboutMe/AboutMe'
import Footer from './componets/Footer/Footer'
import Navbar from './componets/Navbar/Navbar'
import PortFolio from './componets/PortFolio/PortFolio'
import Qualification from './componets/Qualification/Qualification'
import Skills from './componets/Skills/Skills'

function App() {
  return (
   <div className={styles.App}>
         <Navbar/>
         <About/>
         <AboutMe/>
         <Skills/>
         <Qualification/>
         {/* <PortFolio/> */}
         <Footer/>
   </div>
  )
}

export default App
