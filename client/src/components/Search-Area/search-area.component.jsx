import React from 'react';

import Container from 'react-bootstrap/Container';

const SearchArea = (props) => {
        return (
            <Container>

                <div>
                    <form onSubmit={props.searchBook} action="search-area">
                        <input onChange={props.handleSearch} type="text" placeholder="Book Title, Genre, etc"/>
                        <button type="submit">Search</button>
                    </form>
                    
                </div>

            </Container>
        );
    }

export default SearchArea;