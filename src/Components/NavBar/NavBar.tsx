import React from 'react';
import logo from '../../Assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';

const NavBar: React.FC = () => {

    const requestSearch = (query: string) => {
        console.log(query)
    }

    return (
        <nav className="navbar">
            <div className="navbar--items">
                <div className="navbar--items__title">
                    <img src={logo} />
                    <span>Archive</span>
                </div>
                <div className="navbar--items__search">
                    <SearchBar performSearch={requestSearch} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;