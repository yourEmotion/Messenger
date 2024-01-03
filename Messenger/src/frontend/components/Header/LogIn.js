import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className="header">

            <div className="logo">Beepp</div>

            <nav className="navigation">
                <Link to="/">
                    Start page
                </Link>
            </nav>

        </header>
    )

}

export default Header