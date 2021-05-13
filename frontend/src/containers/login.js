import React, { useState } from 'react'


export default function Login(props) {

    const [username, setUsername] = useState('');

    

    function handleChange (event) {
        setUsername(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        console.log('handlin submit')
        props.setLoggedIn(!props.isLoggedIn)
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
