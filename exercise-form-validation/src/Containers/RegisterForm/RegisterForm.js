import React, { Component } from 'react'
import Input from '../Input/Input';

class RegisterForm extends Component {

    state = {
        formData: {
            name: {
                value: '',
                validator: {
                    minLength: 3,
                    maxLength: 6,
                    required: true
                },
                error: { status: true, message: "", isTouch: false }
            },
            phoneNumber: {
                value: '',
                validator: {
                    minLength: 10,
                    maxLength: 10,
                },
                error: { status: true, message: "", isTouch: false }
            },
            email: {
                value: '',
                validator: {
                    required: true
                },
                error: { status: true, message: "", isTouch: false }
            },
            password: {
                value: '',
                validator: {
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: { status: true, message: "", isTouch: false }
            },
        },
        isFormValid: false
    }

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updateForm = { ...this.state.formData }
        updateForm[fieldName].value = fieldValue;

        let { isValid, message } = this.checkValue(e.target.value, updateForm[fieldName].validator)

        updateForm[fieldName].error.status = !isValid;
        updateForm[fieldName].error.message = message;
        updateForm[fieldName].error.isTouch = true;

        let newIsFormValid = true;
        for (let fn in updateForm) {
            if (updateForm[fn].validator.required === true) {
                newIsFormValid = !updateForm[fn].error.status && newIsFormValid;
            }
        }

        this.setState({
            formData: updateForm,
            isFormValid: newIsFormValid
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    checkValue = (value, rules) => {
        let isValid = true;
        let message = '';
        let trimmedValue = value.trim();

        if (rules.maxLength && trimmedValue.length > rules.maxLength) {
            isValid = false;
            message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัว`
        }

        if (rules.maxLength && trimmedValue.length < rules.minLength) {
            isValid = false;
            message = `ช่องนี้ความยาวอย่างน้อยไม่เกิน ${rules.minLength} ตัว`
        }

        if (rules.required && trimmedValue.length === 0) {
            isValid = false;
            message = "คุณต้องกรอกช่องนี้";
        }

        return { isValid, message }
    }

    render() {

        const { name, phoneNumber, email, password } = this.state.formData;
        const { isFormValid } = this.state;

        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={name.value}
                        name="name"
                        placeholder="ชื่อ"
                        error={name.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={phoneNumber.value}
                        name="phoneNumber"
                        placeholder="เบอร์โทรศัพท์"
                        error={phoneNumber.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={email.value}
                        name="email"
                        placeholder="อีเมล์"
                        error={email.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={password.value}
                        name="password"
                        placeholder="ชื่อ"
                        error={password.error} />
                    <button disabled={!isFormValid} className="Button" htmlFor="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm
