import React, { Component } from 'react';

// this is where the logo and "music" text are
function LogoAndText(props){
	return (	
		<div className="logoAndText">
			<img src='/images/YT.png' className="App-logo" alt="logo" />
			<h1 id="ytMusicText">Music</h1>
		</div>
	);
}

export default LogoAndText;