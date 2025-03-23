//  import './App.css';
//  import {Navigate,Routes,Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
 

// function App() {
//   return (
//     <div className="App">
//       <Routes>
// <Route path='/' element={<Navigate to="/login"/>}/>
// <Route path='/login' element={<Login/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path="/home" element={<Home />} />
//       </Routes>
//      </div>
//   );
// }

// export default App; 




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
