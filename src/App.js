import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Weapons from "./components/pages/WeaponsOverview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weapons" element={<Weapons />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
