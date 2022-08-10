import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from './pages/Country'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
