import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ReferralDetails from './pages/ReferralDetails';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';


function App() {
  return(
<Router>
  <Routes>
    <Route path='/login' element={<Login/>} /> 
    <Route path='/' element={<ProtectedRoute child={<Dashboard/>} />} />
    <Route path='/referral/:id' element={<ProtectedRoute child={<ReferralDetails/>} />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router> 
  );

}

export default App;
