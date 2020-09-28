import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { inputValue, handleInputChange, handleClick, list} = props;
    return (
        <Fragment>
            <div>
                <input value={inputValue} onChange={handleInputChange} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);