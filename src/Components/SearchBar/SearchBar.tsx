import React from 'react';
import search from '../../Assets/search.png';

interface Props {
    performSearch(query: string): void,
}

const SearchBar: React.FC<Props> = ({ performSearch }) => {

    const sendSearchQuery = (query: string) => {
        setTimeout(() => {
            performSearch(query)
        }, 1000)
    }

    return (
        <div className="searchbar">
            <div className="searchbar--elements">
                <input type="text" onChange={e => sendSearchQuery(e.target.value)} placeholder="Search"></input>
            </div>
        </div>
    )

}

export default SearchBar;