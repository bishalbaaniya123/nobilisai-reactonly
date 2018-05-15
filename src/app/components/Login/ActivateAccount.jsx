import 'antd/dist/antd.css';
import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';


class ActivateAccount extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <center>
                        <Col span={24} order={4} className="upper-margin">
                            <h1>Account Activated. You can now login.</h1>
                        </Col>
                    </center>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default ActivateAccount;