import 'antd/dist/antd.css';
import React, {Component} from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';


const FormItem = Form.Item;

class UserLogin extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-main-div">
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <Col span={8} order={4}>
                        <Form onSubmit={this.handleSubmit} className="login-form reset-password">
                            <center>
                                <h1>Please enter the token from your email</h1>
                            </center>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input placeholder="Enter the token"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })}
                                <center>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Submit
                                    </Button>
                                </center>
                                <br/>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

const LoginForm = Form.create()(UserLogin);
export default LoginForm;