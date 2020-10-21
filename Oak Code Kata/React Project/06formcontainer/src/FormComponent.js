import React from 'react'

export default function FormComponent(props) {
    return (
        <main>
            <h1>Sample Form</h1>
            <form className="inputForm">
                <input
                    className="text"
                    onChange={props.handleChange}
                    name="firstName"
                    placeholder="First Name"
                    value={props.firstName}
                />
                <br />
                <input
                    className="text"
                    onChange={props.handleChange}
                    name="age"
                    placeholder="Age"
                    value={props.age}
                />
                <br />
                <br />
                <label>
                    <input
                        className="radiobutton"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === "female"}
                        onChange={props.handleChange}
                    />
                    Female
                </label>
                <br />
                <label>
                    <input
                        className="radiobutton"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === "male"}
                        onChange={props.handleChange}
                    />
                    Male
                </label>
                <br />
                <label className="destination-header">
                    Select your destination :
                </label>
                <br />
                <select
                    className="destination-input"
                    onChange={props.handleChange}
                    name="destination"
                    value={props.destination}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>

                <br />
                <br />
                <label className="restrictions-title">
                    Dietary restriction :
                </label>
                <br />
                <div className="restrictions">
                    <input
                        type="checkbox"
                        name="nutsFree"
                        checked={props.nutsFree}
                        onChange={props.handleChange}
                    />
                    <span>Nuts free</span>
                    <br />
                    <input
                        type="checkbox"
                        name="lactoseFree"
                        checked={props.lactoseFree}
                        onChange={props.handleChange}
                    />
                    <span>Lactose free</span>
                    <br />
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.isVegan}
                    />
                    <span>Vegan</span>
                </div>
                <button className="submit">Submit</button>
            </form>
            <hr />
            <div className="entered-info">
                <h2>Entered information:</h2>
                <p>
                    Your name: {props.firstName} {props.lastName}
                </p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.destination}</p>
                <p>Your dietary restrictions: </p>
                <div className="restrictions">
                    <span>**Nuts free : {props.nutsFree ? " Yes" : "No"}</span> <br />
                    <span>**Lactose free : {props.lactoseFree ? " Yes" : "No"}</span>{" "}
                    <br />
                    <span>**Vegan meal : {props.isVegan ? " Yes" : "No"}</span>
                </div>
            </div>
        </main>
    )
}
