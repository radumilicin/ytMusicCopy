import React, { Component } from 'react';
//import require from 'Browserify.js';
import menuImg from '../../images/Menu.png';
import ytLogo from '../../images/YT.png';
// this is where the logo and "music" text are
function MenuLogoAndText(props){
	return (	
		<div className="menuLogoAndText">
			<div className='menu'>
				<img src={menuImg} className="menuImg" alt="logo" />
			</div>
			<div className='ytLogo'>
				<img src={ytLogo} className="ytLogoImg" alt="logo" />
			</div>
			<div className='musicText'>Music</div>
		</div>
	);
}

export default MenuLogoAndText;