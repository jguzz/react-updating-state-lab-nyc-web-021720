// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
	state = {
		timesClicked: 0
	}
	onClick = () => {
		this.setState(previousState => {
			return {
				timesClicked: previousState.timesClicked + 1
			}
		})
	}
	render() {
		return(
		<button onClick={this.onClick}>{this.state.timesClicked}</button>
		)
	}
}

export default DigitalClicker