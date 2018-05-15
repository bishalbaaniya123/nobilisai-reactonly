import 'antd/dist/antd.css';
import React from 'react';
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';
import { Link } from 'react-router-dom';



const FormItem = Form.Item;

class UserRegister extends React.Component {
    constructor() {
        super();
        this.state = {client: "infotmt"}
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

        });
    };
    hand = () => {
      console.log("This");
      this.props.history.push("/login");
    };

    handleRegister = (e) => {
        e.preventDefault();
        const modal = Modal.success({
            title: 'Success',
            content: 'Account created. Check mail for confirmation.',
            onOk() {window.location = "/login"},
        });
/*        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                api.register(this.state.client, values)
                    .then((ResponseData) => {
                        console.log("response", ResponseData);
                        if (ResponseData) {
                            alert("congratulation")

                        }


                    })
            }
        });*/
    };

    enter() {
        console.log("hi")
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-main-div">
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <Col span={6} order={4}>
                        <Form className="login-form">

                            <h1>Register an account</h1>

                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input onPressEnter={this.enter} placeholder="Username"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input onPressEnter={this.enter} type="password" placeholder="Password"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.handleRegister} className="login-form-button">
                                    Register
                                </Button>
                                <br/>
                                <Link to="/login">Have a NobilisAI account? Sign in</Link>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

const UserRegisterForm = Form.create()(UserRegister);
export default UserRegisterForm;