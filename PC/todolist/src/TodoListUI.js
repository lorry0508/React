import React from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends React.Component {
    render() {
        const { inputValue, list, handleBtnClick, handleInputChange, handleItemDelete } = this.props;
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input
                        placeholder="todo info"
                        style={{ width: '300px', marginRight: '10px' }}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={list}
                    renderItem={item => (
                        <List.Item onClick={(index) => { handleItemDelete(index) }}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default TodoListUI; 