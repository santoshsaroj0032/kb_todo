 import './App.css';
 import {Navigate,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Navigate to="/login"/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path="/home" element={<Home />} />
      </Routes>
     </div>
  );
}

export default App;
