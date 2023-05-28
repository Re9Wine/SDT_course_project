import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage';
import { Works } from './components/pages/Works';
import { Account } from './components/pages/Account';
import { Execution } from './components/pages/Execution';
import { Execution4 } from './components/pages/Execution4';
import { Execution11 } from './components/pages/Execution11';

import './stylesheets/index.css';
import './stylesheets/account.css';
import './stylesheets/home.css';
import './stylesheets/execution.css';
import './stylesheets/execution4.css';
import './stylesheets/execution11.css';

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
                        <Route path='/Account' element={<Account />} />
                    </Routes>
                </Router>
            </Layout>
        );
    }
}
