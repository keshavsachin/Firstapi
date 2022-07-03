import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Register from './Pages/Register';
import ProtectedRoutes from './Components/ProtectedRoutes';
function App() {
 
return (
 <div>
   <Routes >
      <Route path="/Login" element={<Register />} />
      <Route path="/Signup" element={<Signup />} />
      
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home />} />
        </Route>
    </Routes>

 </div>

  );
}

export default App;
