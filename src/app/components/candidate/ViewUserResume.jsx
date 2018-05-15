import 'antd/dist/antd.css';
import '../../styles/modules/candidate.css'
import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';

class ViewUserResume extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <center>
                        <Col span={24} order={4} className="upper-margin view-resume-title">
                            <h1>Your Current Resume</h1>
                        </Col>
                    </center>
                </Row>
                <Row>
                    <center>
                        <Col span={24}>
                            <iframe
                                src="https://docs.google.com/viewer?url=https://calibre-ebook.com/downloads/demos/demo.docx&embedded=true"></iframe>
                        </Col>
                    </center>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default ViewUserResume;