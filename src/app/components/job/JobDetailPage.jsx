import 'antd/dist/antd.css';
import '../../styles/modules/job.css';
import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';


class JobList extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle" className="main-job-div">
                    <center>
                        <Col span={24} order={4} className="main-col-joblist">
                            <h1>Job Details</h1>
                            <br/>
                        </Col>
                    </center>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16} order={4} className="single-job-main">
                        <h1>Title 1</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially </p>
                        <Button type="primary" htmlType="submit" className="job-apply-button">
                            Apply
                        </Button>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default JobList;