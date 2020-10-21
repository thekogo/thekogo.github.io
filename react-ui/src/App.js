import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Col, Form, Input, Row } from 'antd';

function App() {

  const layout = {
    labelCol: {
      xs: 6, sm: 8, md: 10
    },
    wrapperCol: {
      xs: 18, sm: 16, md: 14
    }
  }

  let onFinish = (values) => {
    console.log(values);
  }

  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
          <Form {...layout} onFinish={onFinish}>
            <Form.Item
              label="ชื่อ"
              name="name"
              rules={[
                {
                  max: 6,
                  min: 3,
                  message: 'ชื่อต้องอยู่ระหว่าง 3 - 6 ตัวอักษร'
                },
                {
                  required: true,
                  message: 'คุณต้องกรอกช่องนี้'
                }
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="เบอร์โทรศัพท์"
              name="phoneNumber"
              rules={[
                {
                  len: 10,
                  message: 'เบอร์โทรศัพท์ไม่ถูกต้อง'
                }
              ]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item
              label="อีเมล์"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'รูปแบบ Email ไม่ถูกต้อง'
                },
                {
                  required: true,
                  message: 'คุณต้องกรอกช่องนี้'
                }
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'คุณต้องใส่รหัสผ่าน'
                },
                {
                  min: 12,
                  max: 14,
                  message: 'รหัสผ่านของคุณต้องอยู่ระหว่าง 12 - 14'
                }
              ]}
            >
              <Input placeholder="password" type="password" />
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
