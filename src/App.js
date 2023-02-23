import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Accounts from "./Accounts";
import Navbar from "./Navbar";
import UserDetails from "./UserDetails";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="homepage" element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="userDetails" element={<UserDetails />}></Route>
          <Route path="Account" element={<Accounts />}></Route>
          <Route path="loginpage" element={<LoginPage />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
