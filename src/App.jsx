import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './register-form'
import PersonalDetailsForm from './personal-details-form'
import PaymentForm from './payment-form';
import ResultForm from './result';

function App() {

  return (
    <Router>
    <div className="App">
        <Routes>
        <Route path="/register-form" element={<RegistrationForm />} />
        <Route path="/personal-details-form" element={<PersonalDetailsForm />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/result" element={<ResultForm />} />
        <Route path="/" element={<Navigate to="/register-form" />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
