import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from './pages/Country'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const ROUTE_PATHS = {
  Home: '/',
  Country: '/countries/:country',
  NotFound: '*',
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATHS.Home} element={<Home />} />
        <Route path={ROUTE_PATHS.Country} element={<Country />} />
        <Route path={ROUTE_PATHS.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
