import React, { Fragment } from 'react';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>
        );
    }
}

export default App;