import { connect } from 'react-redux';
import React from 'react';

import Input from './input';
import Video from './video';
import List from './list';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.clickEvent = this.clickEvent.bind(this);
		this.state = {
			inp: '',
			video: ''
		};
	}

	changeValue(e) {
		this.setState({inp: e.target.value});
	}
	clickEvent() {
		if( this.state.inp ) {
			let pattern = (this.state.inp).match(/^(?:https?\:\/\/)(?:www\.)?(?:youtu(?:(?:\.be)|(?:be\.com)))\/(?:watch\?v\=)?([\w\-\_]{5,})?$/);
			
			// const my_promise = () =>	{
			// return new Promise( (resolve, reject) => {
			// 		if(pattern) {
			// 			pattern = pattern[1];
			// 			resolve(pattern);
			// 		}
			// 		else {
			// 			reject();
			// 		}
			// 	});
			// }

			// my_promise()
			// 	.then((pattern) => {
			// 		this.props.newLink(this.state.inp);
			// 		this.props.loadVideo(pattern);		
			// 	})
			// 	.then(pattern => this.setState({link: pattern}));
		}
	}

	render() {
		return(
			<div className="main-block">
				<div className="in-form">
					<div className="send-block">
						<Input changeValue={this.changeValue.bind(this)} value={this.state.inp} />
					</div>
					<div className="send-block">
						<div className="send-inp" onClick={() => { this.props.fetchedVideo(); this.forceUpdate(); }} >Найти</div>
					</div>
				</div>
				<div className="main-preview">
					<Video link={this.props.store.video} />
				</div>
				<div className="store-list">
					<List store={this.props.store} />
				</div>
			</div>
		);
	}
}

const state = (state) => {
	return { store: state };
};

const dispatch = (dispatch) => {
	const dispatch_object = {
		fetchedVideo: () => dispatch( {type: 'FETCHED_VIDEO'} )
		// newLink: (link_name) => dispatch({ type: 'NEW_LINK', link: link_name }),
		// loadVideo: (good_link) => dispatch({ type: 'LOAD_VIDEO', good_link: good_link })
	};
	return dispatch_object;
}

export default connect( state, dispatch )(App);