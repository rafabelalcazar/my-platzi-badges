import React, { Component } from 'react';
import './styles/Badge.css'
import confLogo from '../img/badge-header.svg'
class Badge extends Component {
    render() {
        return (
            <div className='Badge'>
                <div className='Badge_header'><img src={confLogo} alt="Logo conferencia" /></div>
                <div className='Badge_section_name container'>
                    <img className='Badge_avatar d-none d-sm-flex' src={this.props.avatarURL} alt="" />
                    <h1 className='my-2'>{this.props.firstName} {this.props.lastName}</h1>
                </div>
                <div className='Badge_section_info'>
                    <p>{this.props.job}</p>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge_footer">
                    {this.props.slogan}
                </div>


            </div>
        );
    }
}

export default Badge;