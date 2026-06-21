import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/Login';

import './App.css';


function App() {
  return(
<Router>
  <Routes>
    <Route path='/login' element={<Login/>} /> 
    <Route path='/' element={<h1>Dashboard</h1>} />
    <Route path='/referral/:id' element={<h1>referral</h1>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
</Router> 
  );

}

export default App;
