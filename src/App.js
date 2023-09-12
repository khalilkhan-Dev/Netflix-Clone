import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
 import Signup from "./components/auth/Signup";
import { AuthContextProvider } from "./Context/AuthContext";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
      

      
        <Route path="/Account" element={<Home/>} />
        <Route path="/" element={<Signin/>} />
        <Route path="Signup" element={<Signup/>} />

      </Routes>
      </AuthContextProvider>
     
      

      
     
       
      
     
    </div>
  );
}

export default App;
