import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<input type="text" className="inp-body" id="inp" value={this.props.value} onChange={this.props.changeValue} placeholder="Ссылка" />
		);
	}
}

export default Input;