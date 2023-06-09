import React, { Component } from 'react';

export class Footer extends Component {
    constructor(props){
        super(props)
    }
    static displayName = Footer.name;

    render() {
        return (
            <footer>
                    <p className='foot'>Могилев, 2023</p>
            </footer>
        );
    }
}