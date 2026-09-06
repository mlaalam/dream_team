import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import PrivacyPolicy from './pages/PrivacyPolicy'
import MainPages from './layouts/MainPages'
import TermsOfUse from './pages/TermsOfUse'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'

function App() {


  return (
    <div className="text-white">
      <Navbar />
     <Routes>
        <Route path='/' element={<MainPages /> } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-cancellation" element={<RefundPolicy />} />
        <Route path="/shipping-digital" element={<ShippingPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
