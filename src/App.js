import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import ProtectedRoutes from './Components/ProtectedRoutes';
function App() {
 
return (
 <div>
   <Routes >
      <Route path="/Signup" element={<Signup />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home />} />
        </Route>
    </Routes>

 </div>

  );
}

export default App;
