import About from "./components/about/About"
import Contacrt from "./components/contact/Contacrt"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import My_Work from "./components/my_work/My_Work"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <My_Work/>
      <Contacrt/>
      {/* <Footer/> */}
    </>
  )
}

export default App

