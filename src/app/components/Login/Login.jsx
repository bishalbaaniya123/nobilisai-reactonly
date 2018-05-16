import 'antd/dist/antd.css';
import '../../styles/modules/login.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';
import {testAction} from "../../actions/test_action.jsx";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {testAction2, testAction3} from "../../actions/test_action";


const FormItem = Form.Item;

class UserLogin extends React.Component {
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
    testButton = () => {
        console.log("This is the test button");
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

                            <h1>Sign in to NobilisAI</h1>

                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username'}],
                                })(
                                    <Input onPressEnter={this.enter}
                                           placeholder="Username"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password'}],
                                })(
                                    <Input onPressEnter={this.enter}
                                           type="password"
                                           placeholder="Password"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.handleLogin} className="login-form-button">
                                    Log in
                                </Button>
                                <br/>
                                <Link to="/register">New to NobilisAI? Register</Link>
                                <br/>
                                <Link className="login-form-forgot" to="/reset">Forgot password?</Link>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
                <Button onClick={ () => this.props.testAction3("hhyhyh") }>Click me</Button>
                <Footer/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        testAction:testAction,
        testAction2: testAction2,
        testAction3: testAction3
    },dispatch)
};
const mapStateToProps = (state) => {
    return {test:state.test};
};

const LoginForm = Form.create()(UserLogin);
const SmartLogin = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default SmartLogin;