import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import NotFound from './Components/Home/NotFound'
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
