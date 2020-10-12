import * as constants from './constants';
import { fromJS } from 'immutable';

// 能把js对象，转换成immutable对象
const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个新的对象
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data);
        default: 
            return state;
    }
}