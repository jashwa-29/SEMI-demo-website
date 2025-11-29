import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import SemiFooter from './Components/SemiFooter'
import Home from './pages/Home'
import AboutSEMI from './pages/AboutSEMI'
import OurMIssion from './pages/OurMIssion'
import NationalBoard from './pages/NationalBoard'
import PastPresidents from './pages/PastPresidents'
import StateChapters from './pages/StateChapters'
import Constitution from './pages/Constitution'
import Contact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
    
        <Header />
        <div className="lg:pt-52 pt-32"></div>
   
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about/semi" element={<AboutSEMI />} />
                <Route path="/about/mission-vision" element={<OurMIssion/>} />
                <Route path="/about/national-board" element={<NationalBoard/>} />
                <Route path="/about/past-presidents" element={<PastPresidents/>} />
                <Route path="/about/state-chapters" element={<StateChapters/>} />
                  <Route path="/about/constitution" element={<Constitution/>} />
                           <Route path="/contact" element={<Contact/>} />


          </Routes>
      
        <SemiFooter />
   
    </BrowserRouter>
  )
}

export default App
