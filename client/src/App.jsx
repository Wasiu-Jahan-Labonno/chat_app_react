import{Routes, Route,Navigate} from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/chat";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import NavBar from "./components/NavBar";
import React from 'react';
import { AuthContextProvider } from '../src/context/AuthContext'; // Make sure the path is correct
import Register from './pages/Register'; // Adjust the path accordingly

function App() {
  return (
    <AuthContextProvider>

    
    <NavBar/>
    <Container>
      <Routes>
            <Route path="/" element={<Chat/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Container>

    </AuthContextProvider>

  

  );
}

export default App
