import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from './HeaderFooter/Header.jsx';
import Footer from './HeaderFooter/Footer.jsx';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <center>
                        <Col span={36} className="upper-margin error-page-main-div">
                            <h1>404 - Not Found</h1>
                            <p>The page you are requesting does not exist or has been modified</p>
                            <a>Go to Home Page</a>
                        </Col>
                    </center>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default NotFound;