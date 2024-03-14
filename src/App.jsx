import './App.css'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
