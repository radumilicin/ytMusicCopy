import React from 'react';
import MenuLogoAndText from './MenuLogoAndText.js';
import ProfilePic from './ProfilePic.js';
import { useMedia } from 'react-responsive';
import SearchBar from './SearchBar.js';

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
		<div className="HeaderDesktopHome">
			<MenuLogoAndText />
			<SearchBar />
			<ProfilePic/>
		</div>
        );
}

export default Header;