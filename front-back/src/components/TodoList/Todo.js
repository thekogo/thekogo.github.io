import React, { useState } from 'react'
import { List, Button, Input, Col, Row, Divider, Typography } from 'antd';
import axios from '../../config/axios';

export default function Todo(props) {
    const { todo, deleteTodo, fetchData } = props;
    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const updateTodoItem = async (id) => {
        await axios.put(`/todo-list/${id}`, {
            task: changeInput
        });
        fetchData();
        setIsEdit(false);
    }

    const toggleEdit = () => {
        setChangeInput(todo.task);
        setIsEdit(true);
    }

    let content = (
        <Row style={{ width: '100%' }}>
            <Col span={20}>
                <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={() => updateTodoItem(todo.id)} >Done</Button>
            </Col>
        </Row>
    );

    if (!isEdit) {
        content = (
            <Row style={{ width: '100%' }}>
                <Col span={16}>
                    <Row justify="start">
                        {todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()} >Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type="danger" onClick={() => deleteTodo(todo.id)} >Delete</Button>
                </Col>
            </Row>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            {content}
        </div>
    )
}
