import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


const inputStringVideo = (data) => {
	return { type: 'NEW_LINK', link: data.message };
}

const loadVideo = (data) => {
	console.log('LOAD_VIDEO');
	return { type: 'LOAD_VIDEO', good_link: data.message };
}

function* watchFetchVideo() {
  yield takeEvery('FETCHED_VIDEO', fetchVideo);
}

function* fetchVideo(action) {
			console.log('watch');
	try {
		let data = yield call(() => {
			return document.getElementById('inp').value;
		});
			
		yield put({ type: 'NEW_LINK', link: data } );
		let data2 = yield call((data) => {
			return ((document.getElementById('inp').value).match(/^(?:https?\:\/\/)(?:www\.)?(?:youtu(?:(?:\.be)|(?:be\.com)))\/(?:watch\?v\=)?([\w\-\_]{5,})?$/))[1];
		});

		yield put({ type: 'LOAD_VIDEO', good_link: data2 } );
		//yield put(loadVideo);
	}
	catch(err) {

	}
}

export default watchFetchVideo;