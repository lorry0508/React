import React, { Fragment } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.handleInputChange} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);