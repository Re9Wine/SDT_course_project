import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage';
import { Works } from './components/pages/Works';
import { Execution } from './components/pages/Execution';
import { Execution4 } from './components/pages/Execution4';
import { Execution11 } from './components/pages/Execution11';

import './index.css';
import './home.css';
import './execution.css';
import './execution4.css';
import './execution11.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/Works' element={<Works />} />
                        <Route path='/Execution' element={<Execution />} />
                        <Route path='/Execution4' element={<Execution4 />} />
                        <Route path='/Execution11' element={<Execution11 />} />
                    </Routes>
                </Router>
            </Layout>
        );
    }
}
