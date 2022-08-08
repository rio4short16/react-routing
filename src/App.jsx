import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayouts from "./layouts/HomeLayouts";
import UserLayouts from "./layouts/UserLayouts";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  const isLoggedIn = false;
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<UserLayouts />}>
            <Route index element={<User />} />
            <Route path="user" element={<User />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeLayouts />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
