const defaultState = {
    inputValue: '2313',
    list: []
};

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
};