import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Footer from './components/Footer'
import JoinDoctor from './pages/JoinDoctor'
import ApplicationStatus from './pages/ApplicationStatus'
import Appointment from './pages/Appointment'
import AdminDashboard from './pages/AdminDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/join-doctor" element={<JoinDoctor />} />
                <Route path="/application-status" element={<ApplicationStatus />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App