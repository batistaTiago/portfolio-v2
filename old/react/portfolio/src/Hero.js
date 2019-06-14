import React, { Component } from 'react';
import './styles/css/Hero.css';

export default class Hero extends Component {
    render() {
        return (
            <section className="flex-columns justify-content-center">
                <div className="hero">
                    <div className="hero-image-container">
                        <img src={require('./images/main.jpg')} className="hero-image" alt="profile-photo" />
                    </div>
                    <div className="titles-container">
                        <h1 className="hero-title">Batista Tiago</h1>
                        <h4 className="hero-subtitle">Engenheiro mecatrônico</h4>
                        <h4 className="hero-subtitle">Bacharel em ciências e tecnologia</h4>
                        <h4 className="hero-subtitle">Full stack web-developer</h4>
                        <h5 className="hero-subtitle">Angular/React & PHP/Node</h5>
                    </div>
                </div>
            </section>
        )
    }
}