import React from 'react';

class Test extends React.Component {
    // 当父组件的render函数被运行时，它的子组件的render都被重新运行
    render() {
        console.log('Test-------------------------');
        return <div>{this.props.content}</div>;
    }
}

export default Test;