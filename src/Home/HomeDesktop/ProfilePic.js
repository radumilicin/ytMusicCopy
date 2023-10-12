import  React, { Component } from 'react';
import ProfilePicture from '../../images/ProfilePic.jpg';

function ProfilePic(){

	return (
		<div className="profilePic">
                        <div className="profilePicDiv">
				<img src={ProfilePicture} alt="profilePic" className="profilePicImg"/>
			</div>
		</div>
	);
}

export default ProfilePic;