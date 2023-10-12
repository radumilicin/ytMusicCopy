import React, { Component } from 'react';
import SearchIcon from '../../images/Search icon.png';

function SearchBar(){

	return (
		<div className="searchBar">	
			<div className='searchBarDiv'>
				<div className="searchIconDiv">
                                	<img src={SearchIcon} className="searchIconImg" alt="logo" />
				</div>
				{/*<div className='searchIcon'></div>*/}
				<div className='textSearchBar'>
					Search songs, albums, artists, podcasts
				</div>			
			</div>
		</div>
	)
}

export default SearchBar;