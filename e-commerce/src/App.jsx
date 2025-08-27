import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
