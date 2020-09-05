import React from 'react'

function Employee(props) {
    return (
        <div>
            <h3>firstname : {props.firstName}</h3>
            <h3>lastname : {props.lastName}</h3>
            <h3>age : {props.age}</h3>
        </div>
    )
}

function Leader(props) {
    const firstName = props.xx;
    const lastName = props.aa;
    const age = props.bb;
    return <Employee firstName={firstName} lastName={lastName} age={age}></Employee>
}

function Head(props) {
    const p = { ...props }
    return <Employee firstName={p.cc} lastName={p.dd} age={p.ee}></Employee>
}

function Lab132() {
    return (
        <div className="App">
            <Employee firstName="Krissada " lastName="Chalermsook" age={25}></Employee>
            <Leader xx="Krissada2 " aa="Chalermsook2" bb={30}></Leader>
            <Head cc="Krissada3" dd="Chalermsook3" ee={40} ></Head>
        </div>
    );
}

export default Lab132;