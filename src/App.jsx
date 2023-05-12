import './App.css'

import { useGlobalContext } from './context'

function App() {

  const value = useGlobalContext()

  return (
   <div>
    Clime.com
    {value}
   </div>
  )
}

export default App
