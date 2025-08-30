import { createRoot } from 'react-dom/client'
import App from './components/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFound from './components/NotFound/NotFound'
import Contact from './components/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'
import Products from './components/Products/Products'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path="/presupuesto" element={<Contact />} />
        <Route path="/catalogo" element={<Products />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
