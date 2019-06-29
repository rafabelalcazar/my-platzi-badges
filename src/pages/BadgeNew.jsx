import React, { Component } from 'react';
import Badge from '../components/Badge'
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'
import hero from '../img/badge-header.svg'
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew_hero">
                    <img src={hero} alt="" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Badge firstName='Rafael' lastName='Belalcázar' job='Full Stack Developer' twitter='rafabelalcazar' slogan='Un desarrollador Top' avatarURL='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />

                        </div>
                        <div className="col-12 col-md-6">
                            <BadgeForm></BadgeForm>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;