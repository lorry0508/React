import axios from 'axios';
import * as constants from './constants';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
}) 

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		})
	}
}