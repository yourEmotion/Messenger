import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
    const { username } = useParams()

    return (
        <header className="header">
            <div className="logo">Beepp</div>
            <nav className="navigation">
                <Link to={`/${username}`}>My page</Link>
                <Link to={`/${username}/friends`}>Friends</Link>
                <Link to={`/${username}/messages`}>Messages</Link>
            </nav>
        </header>
    )
}

export default Header;
