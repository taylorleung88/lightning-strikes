import React from 'react';
import LightningCounter from './LightningCounter.js';

class LightningCounterDisplay extends React.Component {
		constructor(props) {
			super(props);


		}

		

	render() {

		const divStyle = {
			width: 250,
			textAlign: 'center',
			backgroundColor: 'black',
			padding: 40,
			fontFamily: 'sans-serif',
			color: "#999",
			borderRadius: 10
		};

		return(
		
			<div style = {divStyle}>
				<LightningCounter />
			</div>
		
			);
	}
}

export default LightningCounterDisplay;