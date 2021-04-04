import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 style={{
                    color: 'orange'
                }}>The Magic</h1>
                <nav>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;