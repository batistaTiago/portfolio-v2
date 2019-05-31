import React, { Component } from 'react';
import './styles/css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img className="logo" src={require('./images/logo.png')} alt="logo" />
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="https://google.com">Skills</a>
                        </li>
                        <li>
                            <a href="https://google.com">Projetos</a>
                        </li>
                        <li>
                            <a href="https://google.com">Contato</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}