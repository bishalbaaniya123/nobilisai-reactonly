import 'antd/dist/antd.css';
import React, {Component} from 'react';
import {Button, Col, Icon, message, Row, Upload} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';
import '../../styles/modules/candidate.css';
import '../../styles/modules/job.css';

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class JobList extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle" className="main-job-div">
                    <center>
                        <Col span={24} order={4} className="main-col-joblist">
                            <h1>Upload Resume</h1>
                            <br/>
                        </Col>
                    </center>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16} order={4} className="single-job-main">
                        <Upload {...props} accept="application/pdf, application/docx">
                            <Button>
                                <Icon type="upload"/> Click to Upload
                            </Button>
                        </Upload>
                        <br/>
                        <p>You can only upload pdf or docx files</p>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default JobList;