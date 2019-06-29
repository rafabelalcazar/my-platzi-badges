import React, { Component } from 'react';

class BadgeForm extends Component {
    handleChange = (e) => {
        console.log({
            // neme o valor pueden tener cualquier nombre, pero lo que esta en el target si debe ser los atributos del input
            name: e.target.name,
            valor: e.target.value
        })
    }

    handleClick = e => {
        console.log('Clicked')
    }


    render() {
        return (
            <div>
                <h1>New Attendand</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className='form-control' type="text" name='firstName' />
                    </div>
                    <button type='button' onClick={this.handleClick} className='btn btn-primary'>Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;