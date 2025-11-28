import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import SemiFooter from './Components/SemiFooter'
import Home from './pages/Home'
import AboutSEMI from './pages/AboutSEMI'

function App() {
  return (
    <BrowserRouter>
    
        <Header />
        <div className="lg:pt-52 pt-32"></div>
   
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about/semi" element={<AboutSEMI />} />
          </Routes>
      
        <SemiFooter />
   
    </BrowserRouter>
  )
}

export default App
