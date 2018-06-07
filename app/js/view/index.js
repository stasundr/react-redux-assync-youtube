import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './input';
import Video from './video';
import List from './list';

class App extends Component {
	render() {
		return(
			<div className="main-block">
				<div className="in-form">
					<div className="send-block">
						<Input 
							changeValue={this.changeValue.bind(this)}
							value={this.props.input}
						/>
					</div>
					<div className="send-block">
						<div className="send-inp" onClick={this.updateVideo.bind(this)}>
							Найти
						</div>
					</div>
				</div>
				<div className="main-preview">
					<Video link={this.props.video} />
				</div>
				<div className="store-list">
					<List list={this.props.list} />
				</div>
			</div>
		);
	}

	changeValue(e) {
		this.props.changeString(e.target.value);
	}

	updateVideo() {
		this.props.fetchedVideo(this.props.input);
	}
}

const mapStateToProps = (state) => ({
	input: state.get('input'),
	url: state.get('url'),
	video:state.get('video'),
	error: state.get('error'),
	list: state.get('list'),
});

const mapDispatchToProps = (dispatch) => {
	const dispatch_object = {
		fetchedVideo: (str) => dispatch({ type: 'FETCHED_VIDEO', str }),
		changeString: (str) => dispatch({ type: 'WRITE_STR', str })
	};
	return dispatch_object;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);