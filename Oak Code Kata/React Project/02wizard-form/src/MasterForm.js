import React, { Component } from 'react'
import Step1 from './ComponentsStep/Step1'
import Step2 from './ComponentsStep/Step2'
import Step3 from './ComponentsStep/Step3'

export default class MasterForm extends Component {

    state = {
        currentStep: 1,
        email: '',
        username: '',
        password: '',
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`)
    }

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })
    }

    prevButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary float-left"
                    type="button"
                    onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this._next}
                >
                    Next
                </button>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                    {this.prevButton()}
                    {this.nextButton()}
                </form>
            </div>
        )
    }
}
