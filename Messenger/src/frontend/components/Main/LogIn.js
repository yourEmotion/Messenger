import { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const clickButton = () => {
        console.log({
            'username': username,
            'password': password,
        })
    }

    return (
        <main className='main'>
            <h1 className='intro'>
                Log in to Beepp
            </h1>

            <input
                className='inputUsername'
                type='text'
                placeholder='Username or email'
                onChange={(event) => setUsername(event.target.value)} />

            <input
                className='inputPassword'
                type='text'
                placeholder='Password'
                onChange={(event) => setPassword(event.target.value)} />
            
            <Link to={`/${username}`}>
                <button
                    onClick={clickButton}
                    className='flatButton'>
                        <div className='flatButton_content'>Log in</div>
                </button>
            </Link> 

        </main>
    )
}

export default Main