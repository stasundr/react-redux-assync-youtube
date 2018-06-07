import { Map, List } from 'immutable';

const initialState = Map({
	input: '',
	url: '',
	video: '8p1uLKYAwEw',
	error: false,
	list: List([]),
});

const reducer_obj = {
	NEW_LINK: (state, action) => {
		return state.update('list', list => list.push(action.obj_v));
	},
	LOAD_VIDEO: (state, action) => {
		return state
			.set('video', action.good_link)
			.set('input', '');
	},
	WRITE_STR: (state, action) => {
		return state.set('input', action.str);
	},
};

const reducer = (state = initialState, action) => {
	// console.log('Action: ' + action.type);
	try {
		return reducer_obj[action.type](state, action);
	}
	catch(err) {
		return state;
	}
}

export default reducer;