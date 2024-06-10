import React from 'react';
import Home from './containers/Home';
import Users from './containers/Users';

import { Routes, Route, Router } from 'react-routes-dom';

export default function MainRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    );
}

