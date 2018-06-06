import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ul className="main-list">
				{ this.props.store ? (this.props.store.list).map((item, index) => 
					<li key={index}>
						{index + 1}. {item}
					</li>
				) : false}
			</ul>
		);
	}
}

export default List;