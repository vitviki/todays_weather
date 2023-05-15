import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import './App.css'
import Homepage from './pages/Homepage'

function App() {

  return (
   <div>
    Clime.com
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
