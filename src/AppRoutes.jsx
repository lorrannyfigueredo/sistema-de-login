import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { AuthContext } from "./context/auth";

const AppRoutes = () => {
    const [user, setUser] = useState(null);

    return(
        <Router>
            <AuthContext.Provider value={{}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    );
}

export default AppRoutes;