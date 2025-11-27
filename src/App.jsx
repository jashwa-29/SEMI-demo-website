import Header from './Components/Header'
import SemiFooter from './Components/SemiFooter'
import Home from './pages/Home'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      <Home/>
    
      </main>
      <SemiFooter/>
    </div>
  )
}

export default App
