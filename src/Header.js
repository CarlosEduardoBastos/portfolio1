import React from 'react'

const Header = () => {
    return (
        <header className="header-color">
            <section>
                <a href="/" className="logo">Logo</a>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="#sobre">sobre</a></li>
                        <li><a href="#informacao">informação</a></li>
                    </ul>
            </section>
        </header>
    )
}

export default Header
