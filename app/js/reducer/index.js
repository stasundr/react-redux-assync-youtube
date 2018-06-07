import { Map, List } from 'immutable';

const initialState = Map({
	input: '',
	url: '',
	video: '8p1uLKYAwEw',
	error: false,
	list: List([])
});

const reducer_obj = {
	NEW_LINK: (state, action) => {
		console.log(state);
		return state.updateIn( ['list'], list => list.push(action.obj_v) );
		//return Object.assign( {}, state, {list: [ action.obj_v, ...state.list ]} );
	},
	LOAD_VIDEO: (state, action) => {
		state = state.set('video', action.good_link);
		state = state.set('input', '');
		return state;
		//return {...state, video: action.good_link, input: ''};
	},
	WRITE_STR: (state, action) => {
		return state.set('input', action.str);
		// return {...state, input: action.str};
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