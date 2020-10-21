import React, { useState, useEffect } from 'react'
import { List, Button, Input, Col, Row, Divider, Typography } from 'antd';
import _ from 'lodash';
import axios from '../../config/axios';
import Todo from './Todo';

const { Text } = Typography;

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState('');

    const fetchToDoList = async () => {
        const httpRes = await axios.get('/todo-list');
        setTodoList(httpRes.data);
    }

    useEffect(() => {
        fetchToDoList();
    }, [])

    const addTodoItem = async () => {
        const task = inputField;
        await axios.post('/todo-list', {
            task:task
        })
        fetchToDoList();
    }

    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`)
        fetchToDoList();
    }

    return (
        <Row justify="center">
            <Col>
                <Row justify="center">
                    <Text type="warning">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: '100%' }} onClick={addTodoItem} >Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center">
                    <List
                        style={{ width: '450px' }}
                        header={<div>TodoList Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo deleteTodo={deleteTodoItem} todo={todo} fetchData={fetchToDoList} />
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    )
}
