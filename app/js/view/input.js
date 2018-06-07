import React, { Component } from 'react';

class Input extends Component {
	render() {
		return(
			<input
				type="text"
				className="inp-body"
				id="inp"
				value={this.props.value}
				onChange={this.props.changeValue}
				placeholder="Ссылка"
			/>
		);
	}
}

export default Input;