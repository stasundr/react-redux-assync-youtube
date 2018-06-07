import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* watchFetchVideo() {
  yield takeEvery('FETCHED_VIDEO', fetchVideo);
}

function* fetchVideo(action) {
	try {
			let video_id = (action.str).match(/^(?:https?\:\/\/)(?:www\.)?(?:youtu(?:(?:\.be)|(?:be\.com)))\/(?:watch\?v\=)?([\w\-\_]{5,})?$/)[1];
			video_id ? false : video_id = false;

			let obj = {};
			const request = async () => {
  			const response = await fetch('https://www.googleapis.com/youtube/v3/videos?id=' + video_id + '&key=AIzaSyBkiaeSEHNv6wcB5WGHzVJ9d5nzeQXiN1E&part=snippet,contentDetails,statistics,status');
 				const json = await response.json();
 				obj.title = json.items[0].snippet.title,
 				obj.link = action.str,
 				obj.thumble = json.items[0].snippet.thumbnails.default.url
			}
			request();

			yield put({ type: 'NEW_LINK', link: action.str, v_id: video_id, obj_v: obj } );
			yield put({ type: 'LOAD_VIDEO', good_link: video_id } );

		
	}
	catch(err) {}
}

export default watchFetchVideo;

export function* watchChangeString() {
  yield takeEvery('FETCHED_STRING', fetchChangeString);
}

function* fetchChangeString(action) {
	try {
		const data = yield call(() => {
			return action.str;
		});
		yield put({ type: 'WRITE_STR', str: data });

	}
	catch(err) {}
}