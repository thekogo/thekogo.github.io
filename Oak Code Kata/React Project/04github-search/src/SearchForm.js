import React, { useState } from 'react'

export default function SearchForm(props) {

    const [username, setUsername] = useState('');

    const handleForm = event => {
        event.preventDefault();
        props.fetchSearch(username);
    }

    return (
        <div className="search-bar">
            <form
                className="input-group"
                onSubmit={handleForm}>
                <input
                    type="search"
                    placeholder="Type Username here"
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <span className="input-group-btn">
                    <button type="submit"
                        className="btn btn-warning">Submit</button>
                </span>
            </form>
        </div>
    )
}
