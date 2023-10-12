import React from 'react';
import LogoAndText from './logoAndText.js';
import SearchAndProfile from './SearchAndProfile.js';
import { useMedia } from 'react-responsive';

////////////////////////////////////////////////////////////////
// 
//  the header is broken in 2 parts: 
//	
// 	1. the YT logo and the "music" text near it 
//
// 	2. the search icon and the profile icon
//
//////////////////////////////////////////////////////////////// 
function Header(){
	return (
		<div className="Header">
			<LogoAndText />
			<SearchAndProfile />
		</div>
        );
}

export default Header;