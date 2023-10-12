import React from 'react';
import HomePic from '../../images/Home Button.png';
import ExplorePic from '../../images/Explore button.png';
import LibraryPic from '../../images/Library button.png';

function Navigators() {
	return (
                <div className="Navigators">
			<div className='homeRouter'>
				<img src={HomePic} className='homePic' alt='homePicture' />
			</div>
			<div className='exploreRouter'>
				<img src={ExplorePic} className='explorePic' alt='explorePicture' />
			
			</div>
			<div className='libraryRouter'>
				<img src={LibraryPic} className='libraryPic' alt='libraryPic' />
			</div>
                </div>
        );
}

export default Navigators;