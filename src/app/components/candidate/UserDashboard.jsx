import 'antd/dist/antd.css';
import '../../styles/modules/job.css';
import React, {Component} from 'react';
import {Button, Col, Icon, Input, message, Modal, Row, Table, Upload} from 'antd';
import Header from '../HeaderFooter/Header.jsx';
import Footer from '../HeaderFooter/Footer.jsx';

const Search = Input.Search;
const columns = [{
    title: 'Position',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Applied Date',
    dataIndex: 'date',
    key: 'date',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
}];

const data = [{
    key: '1',
    title: 'Java Developer',
    date: "05/10/2018",
    status: 'Applied',
}, {
    key: '2',
    title: 'Django Developer',
    date: "05/10/2018",
    status: 'Applied',
}, {
    key: '3',
    title: 'Laravel Developer',
    date: "05/10/2018",
    status: 'Applied',
}, {
    key: '4',
    title: 'React Redux',
    date: "05/10/2018",
    status: 'Applied',
}, {
    key: '5',
    title: 'Javascript',
    date: "05/10/2018",
    status: 'Applied',
}, {
    key: '6',
    title: 'Web Designer',
    date: "05/10/2018",
    status: 'Applied',
}];
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
    state = {
        loading: false,
        visible: false,
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);
    };
    handleCancel = () => {
        this.setState({visible: false});
    };

    render() {
        const {visible, loading} = this.state;
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle" className="main-job-div">
                    <center>
                        <Col span={12} order={4} className="main-col-joblist">
                            <h1>Dashboard</h1>
                            <br/>
                        </Col>
                    </center>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16} order={4}>
                        <Search
                            placeholder="Search Jobs"
                            onSearch={value => console.log(value)}
                            style={{width: 200}}
                            className="job-search"
                        />
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16} order={4} className="single-job-main">
                        <Col span={6} order={4} className="dasboard-user-image">
                            <img
                                src="http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg"
                                className="user-image-dashboard"/>
                        </Col>
                        <Col span={10} order={4}>
                            <h1>User's Name</h1>
                            <p>Senior Front End Developer</p>
                            <p>Current work, College Name</p>
                            <p>Apple, Menlo Park, CA</p>
                        </Col>
                        <Col span={8} order={4} className="update-resume">
                            <Button type="primary" htmlType="submit" onClick={this.showModal}
                                    className="job-apply-button update-resume-button">
                                Update Resume
                            </Button>

                            <p className="last-updated">Last updated on May 10 2018</p>
                        </Col>
                        <Col span={24} order={4}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries, but also the leap into electronic typesetting, remaining essentially </p>
                        </Col>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16} order={4} className="single-job-main">
                        <Col span={8} order={4}>
                            <h1>Applied Jobs</h1>
                            <br/>
                            <Search
                                placeholder="Search Jobs"
                                onSearch={value => console.log(value)}
                                style={{width: 200}}
                                className="job-search job-search-applied"
                            />
                        </Col>
                        <Col span={8} order={4} className="find-vacancies">
                            <Button type="primary" htmlType="submit"
                                    className="job-apply-button update-resume-button">
                                Find Vacancies
                            </Button>
                        </Col>
                        <Col span={24} order={4} className="find-vacancies">
                            <Table columns={columns} dataSource={data} className="applied-jobs-table"/>
                        </Col>
                    </Col>
                </Row>
                <Footer/>
                <Modal
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>View Existing Resume</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <Row type="flex" justify="center" align="middle">
                        <Col span={16} order={4} className="upload-modal">
                            <a href=" " className="existing-resume">View Existing Resume</a><br/>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload"/> Click to Upload
                                </Button>
                            </Upload>
                            <p>You can upload pdf or docx only. File size must be less than 5 MB.</p>
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default JobList;