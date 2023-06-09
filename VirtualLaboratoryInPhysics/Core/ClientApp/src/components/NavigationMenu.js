import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'

export class NavigationMenu extends Component {
    constructor(props){
        super(props)
    }
    static displayName = NavigationMenu.name;

    render() {
        return (
            <header>
                <div className='presentation'>
                    <div className='herb'></div>
                    <div className='logo'>
                        <p className='title'>ВИРТУАЛЬНАЯ ЛАБОРАТОРИЯ ПО ФИЗИКЕ</p>
                        <p><span className='bru'>БЕЛОРУССКО-РОССИЙСКИЙ УНИВЕРСИТЕТ</span></p>
                        <p className='contact'>г. Могилев, проспект Мира 43<br></br>
                            Тел.: 8 0222 24-47-77</p>
                    </div>
                </div>
            <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='menu-container' id="basic-navbar-nav">
                        <Nav className="menu" id="item">
                            <Nav.Link href="/" className="menu-item" id="item_link">ГЛАВНАЯ</Nav.Link>
                            <Nav.Link href="/Works" className="menu-item" id="item_link">РАБОТЫ</Nav.Link>
                            <Nav.Link href="/Grades" className="menu-item" id="item_link">ОЦЕНКИ</Nav.Link>
                            <Nav.Link href="/Account" className="menu-item" id="item_link">УЧЕТНАЯ ЗАПИСЬ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </header>
        );
    }
}