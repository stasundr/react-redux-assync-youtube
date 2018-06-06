const initialState = {
	url: '',
	video: '8p1uLKYAwEw',
	error: false,
	list: []
};

const reducer_obj = {
	NEW_LINK: (state, action) => {
		state.url = action.link;
		state.url = false;
		state.list.push(action.link);
		return state;
	},
	LOAD_VIDEO: (state, action) => {
		console.log(action.good_link);
		state.video = action.good_link;
		return state;
	}
};

const reducer = (state = initialState, action) => {
	console.log('Action: ' + action.type);
	try {
		return reducer_obj[action.type](state, action);
	}
	catch(err) {
		return state;
	}
}

export default reducer;