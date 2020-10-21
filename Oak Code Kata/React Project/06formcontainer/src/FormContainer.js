import React, { Component } from 'react'
import FormComponent from './FormComponent'

export default class FormContainer extends Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        isVegan: false
    }

    handleChange = (e) => {
        const { value, name, type, checked } = e.target

        if (type === "checkbox") this.setState({ [name]: checked })
        else this.setState({ [name]: value })
    }

    render() {
        return (
            <FormComponent handleChange={this.handleChange} {...this.state} />
        )
    }
}
