import { Link } from 'react-router-dom'

const Header = () => {

    const clickLogIn = () => {
        console.log('Log in')
    }

    const clickSignUp = () => {
        console.log('Sign up')
    }

    return (
        <header className="header">

            <div className="logo">Beepp</div>

            <nav className="navigation">
                <Link to="/log-in"
                    onClick={clickLogIn}>Log in</Link>
                <Link to="/sign-up"
                    onClick={clickSignUp}>Sign up</Link>
            </nav>

        </header>
    )

}

export default Header