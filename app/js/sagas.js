import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* watchFetchVideo() {
	yield takeEvery('FETCHED_VIDEO', fetchVideo);
}

function* fetchVideo(action) {
	try {
		const video_id = (action.str).match(/^(?:https?\:\/\/)(?:www\.)?(?:youtu(?:(?:\.be)|(?:be\.com)))\/(?:watch\?v\=)?([\w\-\_]{5,})?$/)[1];

		if (video_id) {
			const response = yield fetch('https://www.googleapis.com/youtube/v3/videos?id=' + video_id + '&key=AIzaSyBkiaeSEHNv6wcB5WGHzVJ9d5nzeQXiN1E&part=snippet,contentDetails,statistics,status');
			const data = yield response.json();
			
			yield put({
				type: 'LOAD_VIDEO',
				good_link: video_id,
			});

			yield put({
				type: 'NEW_LINK',
				link: action.str,
				v_id: video_id,
				obj_v: {
					title: data.items[0].snippet.title,
					link: action.str,
					thumble: data.items[0].snippet.thumbnails.default.url,
				},
			});

			return;
		}
	}
	catch(err) {}
}

export default watchFetchVideo;