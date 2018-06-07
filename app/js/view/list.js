import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props)
		return(
			<ul className="main-list">
				{ this.props.list ? (this.props.list).map((item, index) => 
					<li key={index}>
						<div>{index + 1}.</div>
						<div>
							<img src={item.thumble} />
						</div>
						<div>
							<a href={item['link']}>{item['title']}</a>
						</div>
					</li>
				) : false}
			</ul>
		);
	}
}

export default List;